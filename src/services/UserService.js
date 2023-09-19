const User = require("../models/UserModel")
const bcrypt = require("bcrypt")

const createUser = (newUser) => {
    return new Promise(async (resovle, reject) => {
        const {name, email, password, confirmPassword, phone} = newUser
        try {
            const checkUser = await User.findOne({
                email : email
            })
            if(checkUser !== null){
                resovle({
                    status : "OK",
                    message : "The email is already"
                })
            }
            const createdUser = await User.create({
                name,
                email,
                password,
                confirmPassword,
                phone
            })
            if(createdUser){
                resovle({
                    status : "OK",
                    message : "SUCCESS",
                    data : createdUser
                })
            }
            resovle({});
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createUser,
};
