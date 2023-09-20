const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const { genneralAccessToken, genneralRefreshToken } = require('./JwtService');

const createUser = (newUser) => {
    return new Promise(async (resovle, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser;
        try {
            const checkUser = await User.findOne({
                email: email,
            });
            if (checkUser !== null) {
                resovle({
                    status: 'OK',
                    message: 'The email is already',
                });
            }
            const hash = bcrypt.hashSync(password, 10);
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                confirmPassword,
                phone,
            });
            if (createdUser) {
                resovle({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdUser,
                });
            }
            resovle({});
        } catch (e) {
            reject(e);
        }
    });
};

const loginUser = (userLogin) => {
    return new Promise(async (resovle, reject) => {
        const { name, email, password, confirmPassword, phone } = userLogin;
        try {
            const checkUser = await User.findOne({
                email: email,
            });
            if (checkUser == null) {
                resovle({
                    status: 'OK',
                    message: 'The user is not defined',
                });
            }
            const comparePassword = bcrypt.compareSync(
                password,
                checkUser.password
            );

            if (!comparePassword) {
                resovle({
                    status: 'OK',
                    message: 'The password or user is incorrect',
                });
            }
            const access_token = await genneralAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin,
            });

            const refresh_token = await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin,
            });

            resovle({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token,
            });
            resovle({});
        } catch (e) {
            reject(e);
        }
    });
};

const updateUser = (id, data) => {
    return new Promise(async (resovle, reject) => {
        try {
            const checkUser = await User.findOne({
                _id: id,
            });
            if (checkUser == null) {
                resovle({
                    status: 'OK',
                    message: 'The user is not defined',
                });
            }

            const updateUser = await User.findByIdAndUpdate(id, data, {
                new: true,
            });
            resovle({
                status: 'OK',
                message: 'SUCCESS',
                data: updateUser,
            });
            resovle({});
        } catch (e) {
            reject(e);
        }
    });
};

const deleteUser = (id) => {
    return new Promise(async (resovle, reject) => {
        try {
            const checkUser = await User.findOne({
                _id: id,
            });
            if (checkUser == null) {
                resovle({
                    status: 'OK',
                    message: 'The user is not defined',
                });
            }

            await User.findByIdAndDelete(id);
            resovle({
                status: 'OK',
                message: 'Delete user SUCCESS',
            });
            resovle({});
        } catch (e) {
            reject(e);
        }
    });
};

const getAllUser = () => {
    return new Promise(async (resovle, reject) => {
        try {
            const allUser = await User.find();
            resovle({
                status: 'OK',
                message: 'Success',
                data: allUser,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getDetailsUser = (id) => {
    return new Promise(async (resovle, reject) => {
        try {
            const user = await User.findOne({
                _id: id,
            });
            if (user == null) {
                resovle({
                    status: 'OK',
                    message: 'The user is not defined',
                });
            }
            resovle({
                status: 'OK',
                message: 'SUCCESS',
                data: user,
            });
            resovle({});
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser,
};
