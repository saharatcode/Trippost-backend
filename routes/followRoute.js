const express = require('express')
const authenticate = require('../middleweres/authenticate')
const followController = require('../controllers/followController')
const router = express.Router();

router.post('/', authenticate, followController.requestFollow)

module.exports = router;