# VIEW

We need to install express-handlebars and to do that we need to type in the terminal/console
```
npm i express-handlebars
```

**express-handlebars**: Express handlebars template engine with multiple layouts, blocks and cached partials.

then copy the `app.js` file and the whole view folder
```
views               
└──layouts
│  └──main.hbs 
└──partials 
|  └──navbar.hbs
└──home.hbs 
```
> **views**: Storage for hbs files
**layouts**: Storage for layouts
**main.hbs**: Main layout of the html
**partials**: Storage for partials
**navbar.hbs**: Partial/component, can be reused by other pages
**home.hbs**: Page/body layout

In the `controller/index.js` file we now change the `/` path's render a .hbs file
so in order to do that we call
```javascripts
res.render('<hbs file in the view>', {/* passed variables */});
```
e.g.
```javascripts
res.render('home', { title: 'hello', name: 'Jeff' });
```
home is the one directed to the `home.hbs` file and the
variables passed in the second parameter will be passed to
the view and lets the view use those variables

### main.hbs
```hbs
...
<title>{{ title }}</title>
...
<body>
    {{{ body }}}
</body>
```
`{{ title }}`: Variable passed in the res.render
`{{{ body }}}`: This is page that is being rendered e.g. res.render('home') => home.hbs is rendered, triple curlly braces

### home.hbs
```hbs
...
{{> navbar }}
...
Congrats {{ name }} for making handlebars
...
```
`{{> navbar }}`: Syntax for calling a partial **navbar.hbs**
```hbs
{{> *name of partial*}}
```