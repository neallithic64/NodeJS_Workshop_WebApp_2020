# FILE STRUCTURE

Copy the *controller and router folder*
Edit the `app.js` file and add some routes to the file
```javascript
////// ROUTING /////////
const indexRouter = require('./router/indexRouter');
const customRouter = require('./router/customRouter');

app.use('/', indexRouter);
app.use('/custom', customRouter);
```
Now try running node on the `app.js` file and then go to the browser and type
http://localhost:8000

Also try accessing this pages if they have different views
http://localhost:8000/asdf
http://localhost:8000/custom
http://localhost:8000/custom/asdf