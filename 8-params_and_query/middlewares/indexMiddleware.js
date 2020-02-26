
function isEmail(email) {
    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/;
    // return regex.test(email);
    return true;
}

const indexMiddleware = {
    validateLogin: function(req, res, next) {
        console.log(req.body);
        const { email, password } = req.body;

        if (!email) { // check if empty
            return res.status(401).end('401 Unauthorized error, Wrong credential'); // 401 Unauthorized error, wrong credential
        } else if (!isEmail(email)) { // check if it is a valid email
            return res.status(401).end('401 Unauthorized error, wrong credential');
        }

        if (!password) {
            return res.status(401).end('401 Unauthorized error, wrong credential');
        }

        next(); // calls the next function
    }
};

module.exports = indexMiddleware;