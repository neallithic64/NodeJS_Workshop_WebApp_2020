/////// MODULE ////////
const express = require('express');
var hbs = require('express-hbs'); // import the hbs module

const app = express();
const PORT = 8000;

// Initialize the view
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
    defaultLayout: `${__dirname}/views/index.hbs`, // sets the main .hbs file
    partialsDir: `${__dirname}/views/partials`,    // sets the partial directory
    layoutsDir: `${__dirname}/views/layouts`       // sets the layouts directory
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

/////// ROUTER ////////
const indexRouter = require('./router/indexRouter');
// const customRouter = require('./router/customRouter'); // REMOVE

app.use('/', indexRouter);
// app.use('/custom', customRouter); // REMOVE


app.listen(8000, () => {
    console.log(`Listening to port ${PORT}`); // once the app is running, this will be logged
});