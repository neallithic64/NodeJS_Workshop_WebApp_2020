type `npm --save-dev nodemon` in the console

nodemon => watches your js files so that your site 
    will automatically update without you manually resetting the server

look at the `package.json` and you will see that nodemon is saved in devDependencies
this means that `nodemon` is installed in your development tools which is not be
part of the production when your code is deployed

to run nodemon, just type
`npx nodemon app` or `nodemon app` // which command works on your machine
in your terminal
or a better practice is to edit your `package.json` and change the code under the script tags

...
"scripts": {
    "dev": "npx nodemon app"
},
...

then once you save it, try typing to your console
`npm run dev` and it will run the command for you.
// this will help other people in running your app/server