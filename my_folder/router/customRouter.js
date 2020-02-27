const express = require('express');
const router = express();
// controller => functions/methods
const controller = require('../controller/custom');

////// ROUTING /////////
// this path is to '/custom'
router.get('/', controller.getHome);
// this path is to '/custom/asdf'
router.get('/asdf', controller.getAsdf);

module.exports = router;