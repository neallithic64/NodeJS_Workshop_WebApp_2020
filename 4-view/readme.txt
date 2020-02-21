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

in the `controller/index.js` file we now change the '/' path's render a .hbs file
so in order to do that we call
res.render('<hbs file in the view>', {/* passed variables */});
e.g.
res.render('home', { title: 'hello', name: 'Jeff' });
home is the one directed to the `home.hbs` file and the
variables passed in the second parameter will be passed to
the view and lets the view use those variables

/// HBS ////
main.hbs -> backbone layout of the code
...
<title>{{ title }}</title> => variable passed in the res.render
...
<body>
    {{{ body }}} => this is page that is being rendered e.g. res.render('home') => home.hbs is rendered, triple curlly braces
</body>
...
////////////////
home.hbs
{{> navbar }} => syntax for calling a partial, {{> / name of partial /}}
...
Congrats {{ name }} for making handlebars => same with title, gets the variable passed
...
//// HBS ////