const express = require('express');
const scrapController = require('../controllers/scrapController');

const router = express.Router();

router.get('/', scrapController.getAllScraps);
router.get('/:id', scrapController.getScrapById);
router.post('/', scrapController.createScrap);
router.put('/:id', scrapController.updateScrap);
router.delete('/:id', scrapController.deleteScrap);

module.exports = router;