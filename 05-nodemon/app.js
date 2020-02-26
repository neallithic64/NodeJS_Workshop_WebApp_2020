/////// MODULE ////////
const express = require('express');
const path = require('path'); // for file directories
const exphbs = require('express-handlebars'); // import the hbs module

const app = express();
const PORT = 8000;

// Initialize the view
app.use(express.static(__dirname + '/'));
app.set('views', path.join(__dirname, 'views/'));

app.engine('hbs', exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main',          // sets the main .hbs file
    partialsDir: 'views/partials',  // sets the partial directory
    layoutsDir: 'views/layouts',    // sets the layouts directory
}).engine);
app.set('view engine', 'hbs');

/////// ROUTER ////////
const indexRouter = require('./router/indexRouter');
// const customRouter = require('./router/customRouter'); // REMOVE

app.use('/', indexRouter);
// app.use('/custom', customRouter); // REMOVE


app.listen(8000, () => {
    console.log(`Listening to port ${PORT}`); // once the app is running, this will be logged
});