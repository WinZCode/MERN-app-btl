const Product = require('../models/ProductModel');
const bcrypt = require('bcrypt');

const createProduct = (newProduct) => {
    return new Promise(async (resovle, reject) => {
        const {name, image, type, countInStock, price, rating, description} = newProduct;

        try {
            const checkProduct = await Product.findOne({
                name : name
            });
            if (checkProduct !== null) {
                resovle({
                    status: 'OK',
                    message: 'The name of product is already',
                });
            }
            const createdProduct = await Product.create({
                name,
                image,
                type,
                countInStock,
                price,
                rating,
                description
            });
            if (createdProduct) {
                resovle({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdProduct,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

const deleteProduct = (id) => {
    return new Promise(async (resovle, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id,
            });
            if (checkProduct == null) {
                resovle({
                    status: 'OK',
                    message: 'The user is not defined',
                });
            }

            await Product.findByIdAndDelete(id);
            resovle({
                status: 'OK',
                message: 'Delete user SUCCESS',
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllProduct = () => {
    return new Promise(async (resovle, reject) => {
        try {
            const allProduct = await Product.find();
            resovle({
                status: 'OK',
                message: 'Success',
                data: allProduct,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const updateProduct = (id, data) => {
    return new Promise(async (resovle, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id,
            });
            if (checkProduct == null) {
                resovle({
                    status: 'OK',
                    message: 'The user is not defined',
                });
            }

            const updateProduct = await Product.findByIdAndUpdate(ip, data, {
                new: true,
            });
            resovle({
                status: 'OK',
                message: 'SUCCESS',
                data: updateProduct,
            });
            resovle({});
        } catch (e) {
            reject(e);
        }
    });
};

const getDetailsProduct = (id) => {
    return new Promise(async (resovle, reject) => {
        try {
            const product = await Product.findOne({
                _id: id,
            });
            if (product == null) {
                resovle({
                    status: 'OK',
                    message: 'The product is not defined',
                });
            }
            resovle({
                status: 'OK',
                message: 'SUCCESS',
                data: product,
            });
            resovle({});
        } catch (e) {
            reject(e);
        }
    });
};


module.exports = {
    createProduct,
    getDetailsProduct,
    updateProduct,
    deleteProduct,
    getAllProduct,
};

