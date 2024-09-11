const Book = require('../models/book_model');

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOneBook = async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).send({ message: "Book not found" });
      }
      res.json(book);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Could not fetch book", error: error.message });
    }
  };

  exports.updateBook = async (req, res) => {
    try {
      const updatedBook = await Book.updateOne({ _id: req.params.id });
      res.json(updatedBook);
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  exports.deleteAllBooks = async (req, res) => {
    try {
      await Book.deleteMany({});
      res.send({ message: "All books deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Could not delete", error: error.message });
    }
  };
  
  exports.deleteBook = async (req, res) => {
    try {
      const removedBook = await Book.deleteOne({ _id: req.params.id });
      res.json(removedBook);
    } catch (error) {
      res.json({ message: error.message });
    }
  };