in the hbs part (#4 folder) we can pass variables from our server to the view
but how can we do it backwards

So we only need a module called body-parser
just type `npm i body-parser`
body-parser just parses the form so that you can read the data

next just add the module to app.js and then we add the module as a middleware
A middleware will run first after the expected controller function

next is to make the form // just copy from a login template of bootstrap
login.hbs
...
<form method="POST"> => add this method attribute and has a value of POST
...
<input type="email name="email" ...> => add a name attribute and name it same as the id
...
the method attribute is important so that the server will know what to do with your request
*//////////////////////////
* 4 method request
* GET - when you want to get something from the server
* POST - when you want to post or add a person in the db
* PUT/PATCH - when you want to update something on the db
* DELETE - when you want to delete something on the db

adding the name attribute in the form will be important so that the input
will be passed to the server

then we can add a 
`router.get('/login', controller.getLogin);` and
`router.post('/login, controller.postLogin);` to the indexRouter
after that we make the getLogin and postLogin function
let's just render the `login.hbs` view when we are getting and
in the postLogin we want to get the values so I put a `console.log(req.body)`
so that you can see/verify that all of the values in the form are passed.
Next I put them inside variables by deconstruction and the just passed them to
the `profile.hbs` view to pass the variables

// Additional info
inside login.hbs - if else statement in hbs
{{#if checkMe}} // checks if checkMe has a value, false condition = val is false, null, undefined
    {{ password }} // show this line if the condition is true
{{else}} 
    No peeking // show this line if the condition is false
{{/if}} // end if

// don't forget to put an attribute name in the input