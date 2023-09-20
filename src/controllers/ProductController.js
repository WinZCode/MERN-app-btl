const ProductService = require('../services/ProductService')

const createProduct = async (req, res) => {
    try {
        const { name, image, type, countInStock, price, description, rating} = req.body;

        if (!name || !image || !type || !countInStock || !price || !rating) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } 
        console.log("respone", response)
        const response = await ProductService.createProduct(req.body); // Sử dụng biến khác cho kết quả của UserService.CreateUser()
        return res.status(200).json(response);// Sử dụng biến khác cho kết quả
    } catch (e) {
        return res.status(404).json({
            message: e, // Sửa lại để truy cập thuộc tính 'message' của đối tượng lỗi
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const data = req.body;
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ProductId is require',
            });
        }
        const response = await ProductService.updateProduct(productId, data);
        return res.status(200).json(response); // Sử dụng biến khác cho kết quả
    } catch (e) {
        return res.status(404).json({
            message: e, // Sửa lại để truy cập thuộc tính 'message' của đối tượng lỗi
        });
    }
};

const getDetailsProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is require',
            });
        }
        const response = await ProductService.getDetailsProduct(productId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is require',
            });
        }
        const response = await ProductService.deleteProduct(productId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const response = await ProductService.getAllProduct();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};
module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct,
};
