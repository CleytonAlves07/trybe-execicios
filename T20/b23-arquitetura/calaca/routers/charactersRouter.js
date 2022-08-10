const express = require('express');
// const characterModel = require('../model/characterModel');
const characterController = require('../controllers/characterController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, characterController.getAll);

router.post('/', characterController.add);

router.get('/:id', characterController.getById);

router.put('/:id', characterController.update);

router.delete('/:id', characterController.exclude);

module.exports = router;
