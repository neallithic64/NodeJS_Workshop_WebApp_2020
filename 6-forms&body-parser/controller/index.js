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

        res.render('profile', {
            email,      // same as email: email
            password,   // same as password: password 
            checkMe     // same as checkMe: checkMe
        });
    }
};

module.exports = indexFunctions;