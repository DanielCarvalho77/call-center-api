const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = Router();

router.get('/product', ProdutoController.findAllProduct);
router.get('/product/:id', ProdutoController.findOneProduct);
router.delete('/product/:id', ProdutoController.deleteProduct);
router.post('/product', ProdutoController.createProduct);
router.put('/product/update/:id', ProdutoController.updateProduct)

module.exports = router;
