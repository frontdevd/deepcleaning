const express = require('express');
const controller = require('../controllers/auth');
const router = express.Router();


// /api/email/send
router.post('/send', controller.login);

module.exports = router;
