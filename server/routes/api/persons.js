const router = require('express').Router();
const persController = require('../../controllers/persController');

// Matches with "/api/books"
// router
//   .route('/')
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route('/:id')
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);
// PERSON
// app.get('/api/person', persController.findAll);
// app.get('/api/person', persController.findById);
router
  .route('/api/person')
  .get(persController.findAll)
  .post(persController.create);

router
  .route('/api/person/:id')
  .get(persController.findById)
  .put(persController.update)
  .delete(persController.remove);

router
  .route('/api/person')
  .get(persController.findAll)
  .post(persController.create);

router
  .route('/api/person/:id')
  .get(persController.findById)
  .put(persController.update)
  .delete(persController.remove);

module.exports = router;
