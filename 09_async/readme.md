# ASYNCHRONOUS FUNCTIONS
Asynchronous functions just means that a function can run in the background aside from the main function calls.
### PROMISES
A promise works like with normal promises. Promises can be fulfilled/`resolve` or broken/`reject`. Also a promise can have a time frame/`timeout`.
With those in mind, the syntax of a promise is a follows:
```javascript
new Promise((resolve, reject) => {
    if (<condition>)    return resolve([params]);
    else                return reject([params]);
);
```
So let's use this as an example:
```javascript
let promise = new Promise((resolve, reject) => {
    if (true)   return resolve(1);
    else        return reject(2);
);
```
So when we call promise and we want to get the parameters that are being passed in the `resolve()` we just use `.then()` while parameters in the `reject()` will be in the `.catch()`.
```javascript
promise.then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
```
If the promise resolves then it should print 1, else it should print 2.
### ASYNC/AWAIT
Almost the same with promises but cleaner.
```javascript
let foo = async function() {
    try {
        let hello = await promise(); // some promise
        return Promise.resolve(hello);
    } catch (err) {
        return Promise.reject(2);
    }
}
```
The `async` keyword is needed so that we can use the `await` keyword while the `await` keyword will wait from the promise to be `resolved` before it runs the next line. If it gets `rejected` the catch block will catch the error.
### CALLBACK HELL
E.G in the `controller/async.js` file
```javascript
getCallbackHell: function(req, res, next) {
    promises.addDelay(100, 200, 100)
        .then(sum => {
            promises.subtractDelay(sum, 90, 100)
                .then(difference => {
                    promises.addDelay(difference, 10, 200)
                        .then(sum2 => {
                            return res.json(sum2);
                        }).catch(err => {
                            return res.json(err);
                        })
                }).catch(err => {
                    return res.json(err);
                });
        }).catch(err => {
            return res.json(err);
        });
}
```
If are needed to wait for a value before we can do anything, this will be a problem. This is a problem in writing and reading this kind of problem. A solution is using either promise chaining or await chaining.
### Promise chaining
```javascript
getPromiseChaining: function(req, res, next) {
    promises.addDelay(100, 200, 100)
        .then(sum => {
            return promises.subtractDelay(sum, 90, 100);
        }).then(difference => {
            return promises.addDelay(difference, 10, 200);
        }).then(sum2 => {
            return res.json(sum2);
        }).catch(err => {
            return res.json(err);
        });
}
```
### Await Chaining
```javascript
getAwaitChaining: async function(req, res, next) {
    try {
        let sum = await promises.addDelay(100, 200, 100);
        let difference = await promises.subtractDelay(sum, 90, 100);
        let sum2 = await promises.addDelay(difference, 10, 200);
        return res.json(sum2);
    } catch (err) {
        return res.json(err);
    }
}
```
Both solve the problem in a similar way but you can use anything to solve your problem. The advantages of doing promise chaining is that it is faster than awaits while awaits is easy to write and read.