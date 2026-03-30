const express = require('express');
const scrapsRouter = require('./scraps');
const ideasRouter = require('./ideas');

const router = express.Router();

router.use('/scraps', scrapsRouter);
router.use('/ideas', ideasRouter);

module.exports = router;