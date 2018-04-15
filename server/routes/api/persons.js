const router = require('express').Router();
const persController = require('../../controllers/persController');

//CREATE
router.route('/').post(persController.create);
//READ
router.route('/').get(persController.findAll);
router.route('/:id').get(persController.findById);
//UPDATE
router.route('/:id').put(persController.update);
//DELETE
router.route('/:id').delete(persController.remove);

module.exports = router;
