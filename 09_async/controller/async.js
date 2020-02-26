const promises = {
    add: function(i1, i2) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i1 + i2);
            }, 1000); // 1 second delay
        });
    },

    addDelay: function(i1, i2, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Timeout ¯\\_(ツ)_/¯');
            }, 5000);
            setTimeout(() => {
                resolve(i1 + i2);
            }, delay); // ms delay
        });
    },

    subtractDelay: function(i1, i2, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Timeout ¯\\_(ツ)_/¯');
            }, 5000);
            setTimeout(() => {
                resolve(i1 - i2);
            }, delay); // ms delay
        });
    }
};

const asyncFunctions = {
    getPromise: function(req, res, next) {
        console.log('Doing Promise');
        promises.add(1, 2)
            .then(sum => {
                console.log('Promise Fulfilled');
                console.log(sum);
                return res.json({ sum: sum });
            }).catch(err => {
                console.log(err);
                return res.json(err);
            });
        console.log('Promise Running');
    },

    getPromise2: function(req, res, next) {
        promises.addDelay(4, 5, 1000)
        // promises.addDelay(4, 5, 7000)
            .then(sum => {
                return res.json({ sum: sum });
            }).catch(err => {
                return res.json(err);
            });
    },

    getPromiseAll: function(req, res, next) {
        let p1 = promises.addDelay(4, 5, 2000);
        let p2 = promises.subtractDelay(100, 7, 1000);
        // let p2 = promises.subtractDelay(100, 8, 7000);

        // wait for all the promises to finish
        Promise.all([p1, p2])
            .then((sum, difference) => {
                return res.json({
                    sum,
                    difference
                })
            }).catch(err => {
                return res.json(err);
            });
    },

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
    },

    getPromiseChaining: function(req, res, next) {
        promises.addDelay(100, 200, 100)
            .then(sum => {
                // returning a promise will call the next then callback
                // if promise is then it goes to the catch instead
                return promises.subtractDelay(sum, 90, 100);
            }).then(difference => {
                return promises.addDelay(difference, 10, 200);
            }).then(sum2 => {
                return res.json(sum2);
            }).catch(err => {
                return res.json(err);
            });
    },

    getAwait: async function(req, res, next) {
        try {
            let sum = await promises.addDelay(100, 30, 1000);
            console.log(sum);
            return res.json(sum);
        } catch(err) {
            return res.json(err);
        }
    },

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
};

module.exports = asyncFunctions;