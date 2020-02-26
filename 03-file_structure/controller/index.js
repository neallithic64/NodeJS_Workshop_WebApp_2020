const indexFunctions = {
    getHome: function(req, res, next) {
        res.send('Home Directory');
    },

    getAsdf: function(req, res, next) {
        res.send('Asdf Directory');
    }
};

module.exports = indexFunctions;