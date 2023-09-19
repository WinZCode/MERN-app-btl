const UserService = require('../services/UserService');

const createUser = async (req, res) => {
    try {
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if(!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status : "ERR",
                message : 'The input is required'
            })
        }else if(!isCheckEmail) {
            return res.status(200).json({
                status : "ERR",
                message : 'The input is email'
            })
        }else if (password !== confirmPassword){
            return res.status(200).json({
                status : "ERR",
                message : 'The password is equal confirmPassword'
            })
        }
        console.log("isCheckEmail", isCheckEmail)
        const response = await UserService.createUser(req.body); // Sử dụng biến khác cho kết quả của UserService.CreateUser()
        return res.status(200).json(response); // Sử dụng biến khác cho kết quả
    } catch (e) {
        return res.status(404).json({
            message: e // Sửa lại để truy cập thuộc tính 'message' của đối tượng lỗi
        });
    }
};

module.exports = {
    createUser, // Sửa tên hàm thành chữ thường theo quy ước của JavaScript
};
