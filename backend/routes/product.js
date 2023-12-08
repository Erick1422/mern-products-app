const { Router } = require('express');
const { addProduct } = require('../controllers/productController');
const upload = require('../libs/storage');
const router = Router();

router.get('/', (req, res) => {
    res.status(201).send({ success: true });
});

router.post('/', upload.single('image'), addProduct);

module.exports = router;