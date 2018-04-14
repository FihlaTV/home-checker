const router = require('express').Router();
const persController = require('../../controllers/persController');

//CREATE
router.route('/api/person').post(persController.create);
//READ
router.route('/api/person').get(persController.findAll);
router.route('/api/person/:id').get(persController.findById);
//UPDATE
router.route('/api/person/:id').put(persController.update);
//DELETE
router.route('/api/person/:id').delete(persController.remove);

module.exports = router;
