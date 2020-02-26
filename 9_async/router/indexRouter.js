const express = require('express');
const router = express();
const controller = require('../controller/index');
const middleware = require('../middlewares/indexMiddleware');

router.get('/', controller.getHome);
router.get('/asdf', controller.getAsdf);
router.get('/login', controller.getLogin);
router.post('/login', middleware.validateLogin, controller.postLogin);
// EDIT
router.get('/user/:id', controller.getParams);
router.get('/user/:fname/:lname', controller.getParams2);
router.get('/query1', controller.getQuery);
router.get('/query2', controller.getQuery2);
router.post('/query2', controller.postQuery);

module.exports = router;