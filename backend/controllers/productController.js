const Product = require('../models/Product');

const addProduct = async (req, res) => {
    try {
        const { body, file } = req;
        const product = new Product(body);

        if (file) {
            const { filename } = file;
            product.setImgUrl(filename);
        }

        const savedProduct = await product.save();
        res.status(201).send({ savedProduct });

    } catch (error) {
        res.status(500).send({ success: false, msg: 'Ocurrió un error al guardar el producto' });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find().exec();
        res.status(201).send({ products });

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addProduct,
    getProducts
}