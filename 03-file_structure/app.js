const express = require('express');

const app = express();
const PORT = 8000;

////// ROUTING /////////
const indexRouter = require('./router/indexRouter');
const customRouter = require('./router/customRouter');

app.use('/', indexRouter);
app.use('/custom', customRouter);
////// ROUTING /////////


app.listen(8000, () => {
    console.log(`Listening to port ${PORT}`); // once the app is running, this will be logged
});