const UserService = require('../services/UserService');

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await UserService.createUser(); // Sử dụng biến khác cho kết quả của UserService.CreateUser()
        return res.status(200).json(user); // Sử dụng biến khác cho kết quả
    } catch (e) {
        return res.status(404).json({
            message: e.message, // Sửa lại để truy cập thuộc tính 'message' của đối tượng lỗi
        });
    }
};

module.exports = {
    createUser, // Sửa tên hàm thành chữ thường theo quy ước của JavaScript
};
