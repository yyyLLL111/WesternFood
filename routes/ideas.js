const express = require('express');
const ideaController = require('../controllers/ideaController');

const router = express.Router();

router.get('/', ideaController.getAllIdeas);
router.get('/:id', ideaController.getIdeaById);
router.post('/', ideaController.createIdea);
router.put('/:id', ideaController.updateIdea);
router.delete('/:id', ideaController.deleteIdea);

module.exports = router;