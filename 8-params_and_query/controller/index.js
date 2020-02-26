// login db sample
let users = [
    {
        email: 'asdf@asdf.asdf',
        password: 'asdf'
    }
]

const indexFunctions = {
    getHome: function(req, res, next) {
        res.render('home', {
            title: 'hello',
            name: 'Jeff'
        });
    },

    getAsdf: function(req, res, next) {
        res.send('Asdf Directory');
    },

    // Add this
    getLogin: function(req, res, next) {
        res.render('login', { // just render login.hbs
            title: 'Login'
        });
    },

    postLogin: function(req, res, next) {
        console.log(req.body); // data from the form is stored
        let { email, password, checkMe } = req.body;

        console.log(email !== users[0].email);
        if (email !== users[0].email) {
            return res.status(401).end('401 Unauthorized error, wrong credential');
        }

        console.log(password !== users[0].password);
        if (password !== users[0].password) {
            return res.status(401).end('401 Unauthorized error, wrong credential');
        }

        console.log('hello');
        return res.status(200).render('profile', {
            email,      // same as email: email
            password,   // same as password: password 
            checkMe     // same as checkMe: checkMe
        });
    },

    getParams: function(req, res, next) {
        console.log(req.params);

        res.render('params', {
            id: req.params.id
        });
    },

    getParams2: function(req, res, next) {
        console.log(req.params);

        res.render('params2', {
            ...req.params
        });
    },  

    getQuery: function(req, res, next) {
        res.render('query1', {
            title: 'Sample Query'
        })
    },

    getQuery2: function(req, res, next) {
        res.render('query2', {
            title: 'Sample Query'
        });
    },

    postQuery: function(req, res, next) {
        console.log(req.query);

        // just show the query string
        res.json(req.query);
    }
};

module.exports = indexFunctions;