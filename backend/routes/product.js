const { Router } = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const upload = require('../libs/storage');
const router = Router();

router.get('/', getProducts);

router.post('/', upload.single('image'), addProduct);

module.exports = router;