const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book_controller');

router.post('/add', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getOneBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.delete('/', bookController.deleteAllBooks);




module.exports = router;