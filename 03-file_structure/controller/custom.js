const customFunctions = {
    getHome: function(req, res, next) {
        res.send('Custom Home Directory');
    },

    getAsdf: function(req, res, next) {
        res.send('Custom Asdf Directory');
    }
};

module.exports = customFunctions;