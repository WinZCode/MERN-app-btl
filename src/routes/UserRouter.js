const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { authMiddleware, authUserMiddleware } = require('../middleware/authMiddleware');

router.post('/sign-up', userController.createUser);
router.post('/sign-in', userController.loginUser);
router.put('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', authMiddleware, userController.deleteUser);
router.get('/get-details/:id', userController.getDetailsUser);
router.get('/getALL', authMiddleware, userController.getAllUser);
router.post('/refresh-token', userController.refreshToken);
module.exports = router;
