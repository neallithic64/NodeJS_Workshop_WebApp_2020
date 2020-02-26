const express = require('express');
const router = express();
// controller => functions/methods
const controller = require('../controller/index');

router.get('/', controller.getHome);
router.get('/asdf', controller.getAsdf);
// Add this
router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);

module.exports = router;