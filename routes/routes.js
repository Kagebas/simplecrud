const express = require('express');
const router = express.Router();
const produto = require('../controllers/produto_controller.js');


router.get('/find', produto.get);
router.post('/create', produto.create);
router.put('/update/:id', produto.update);
router.delete('/delete/:id', produto.delete);


module.exports = router;

