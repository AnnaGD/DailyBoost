const express = require('express');
const historyController = require('../controllers/historyController');
const router = express.Router();

router.get('/history', historyController.getAllHistory)

module.exports = router;
