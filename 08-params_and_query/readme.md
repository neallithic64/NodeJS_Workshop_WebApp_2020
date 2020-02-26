# Query String
A query string is a string attached to the end of the route path. For example:
```
https://localhost:8000/query?fname=hello&lname=hi
```
> route: `https://localhost:8000/query`
 query string: `fname=hello&lname=hi`
 
 This route will go to the normal `/query` route but there will be additional arguments that will be passed to the server. In order to obtain the query string all we have to do is type
 ```javascript
 req.query
 ```
 This will return an object and to access the values inside a query, for example a query string `fname=hello&lname=hi`, to get fname is
 ```javascript
 req.query.fname
 ```
 this will return the value `hello`.
 