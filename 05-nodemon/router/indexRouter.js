const express = require('express');
const router = express();
// controller => functions/methods
const controller = require('../controller/index');

////// ROUTING /////////
// this path is to '/'
router.get('/', controller.getHome);
// this path is to '/asdf'
router.get('/asdf', controller.getAsdf);

module.exports = router;