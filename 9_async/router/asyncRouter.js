const express = require('express');
const router = express();
const controller = require('../controller/async');

router.get('/promise', controller.getPromise);
router.get('/promise2', controller.getPromise2);
router.get('/callbackhell', controller.getCallbackHell);
router.get('/promisechaining', controller.getPromiseChaining);
router.get('/await', controller.getAwait);
router.get('/awaitchaining', controller.getAwaitChaining);

module.exports = router;