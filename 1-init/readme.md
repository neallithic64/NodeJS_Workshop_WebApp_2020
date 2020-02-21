# INIT

To start we need to create an empty folder and type in the console
```
npm init
```
Enter your project name and press enter for the rest of the options. Once your done, you will see a file named `package.json` which will reflect to what we inputted earlier.
After that, we install express by typing in the console
```
npm i express
```

**_module express_** : *Fast, unopinionated, minimalist web framework for node.*

There will be a *node_module* added in your file directory. This will be all the modules that are used by your app.

Look at `package.json` and look at the *dependencies* that have been added.
```javascript
"dependencies": {
    "express": "^4.17.1"
}
```
The module name and version number is shown.