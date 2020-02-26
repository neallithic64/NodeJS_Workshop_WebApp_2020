const indexFunctions = {
    getHome: function(req, res, next) {
        res.render('home', {
            title: 'hello',
            name: 'Jeff'
        });
    },

    getAsdf: function(req, res, next) {
        res.send('Asdf Directory');
    }
};

module.exports = indexFunctions;