const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/', bookController.getOneBook);
router.put('/', bookController.updateBook);
router.delete('/', bookController.deleteBook);
router.delete('/', bookController.deleteAllBooks);




module.exports = router;