// asynchronous functions are functions that run on a different thread 

let bar = function() {
    return 10 * 10;
}

// await needs an async 
let foo = async function() {
    try {
        let a = await bar(); //waits for bar to finish to go down 
        return Promise.resolve(10);
    } catch(err) {
        return Promise.reject(err);
    }
};

let promise = function(txt) {
    return new Promise((resolve, reject) => {
        // do something
        let condition;
        if (condition) {
            return resolve('good');
        } else {
            return reject('bad');
        }
    });
};

promise('hello')
    .then(res => { // if promise went to resolve

    }).catch(err => { // if promise went to reject

    });
// same through with foo

///// EXAMPLE CODE /////
// this is a promise that queries data on the database
// and waits for the data to be retrieved
db.collection('test').findOne({ email })
    .then(userDoc => { // once the data is retrieved
        console.log(userDoc);
    }).catch(err => { // if something went wrong in querying // err 500
        console.log(err);
    });