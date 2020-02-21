express-hbs installation

type `npm i express-handlebars` in the terminal/console

express-handlebars => Express handlebars template engine with multiple layouts, blocks and cached partials.

then copy the `app.js` file and the whole view folder
// Delete the custom route and custom controller file since I will not use them anymore

views               // storage for hbs files
|--layouts          // storage for layouts
|  +--main.hbs      // main layout of the html
|--partials         // storage for partials
|  +--navbar.hbs    // partial/component of an html, can be reused by other pages
+--home.hbs         // page/body layout