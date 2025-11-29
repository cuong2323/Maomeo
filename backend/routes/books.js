// backend/routes/books.js
import express from 'express';
import BooksController from '../controllers/booksControllers.js';
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/adminMiddleware.js';

const routerBooks = express.Router();
const bookscontroller = new BooksController();

/* ===============================
   ⚠️ Route Category PHẢI ĐẶT TRƯỚC
   =============================== */
routerBooks.get('/category/:id', (req, res) =>
  bookscontroller.getBooksByCategory(req, res)
);

/* ===============================
   PUBLIC ROUTES
   =============================== */
routerBooks.get('/', (req, res) => bookscontroller.index(req, res));
routerBooks.get('/:id', (req, res) => bookscontroller.show(req, res));

/* ===============================
   ADMIN ROUTES
   =============================== */
routerBooks.post('/', protect, admin, (req, res) =>
  bookscontroller.store(req, res)
);

routerBooks.put('/:id', protect, admin, (req, res) =>
  bookscontroller.update(req, res)
);

routerBooks.delete('/:id', protect, admin, (req, res) =>
  bookscontroller.delete(req, res)
);

export default routerBooks;
