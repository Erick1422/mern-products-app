const { Schema, model } = require('mongoose');
const { appConfig } = require('../config');

const ProductSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String
}, {
    timestamps: true
});

ProductSchema.methods.setImgUrl = function setImgUrl(filename) {
    const { host, port } = appConfig;
    this.imgUrl = `${host}:${port}/public/${filename}`;
}

module.exports = model('Products', ProductSchema);