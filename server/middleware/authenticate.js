const { User } = require('./../models/user');

const authenticate = (request, response, next) => {
    const token = request.header('Authorization');
    User.findByToken(token).then((user) => {
        // Token is valid
        if (!user) {
            return Promise.reject();
        }
        request.user = user;
        request.token = token;
        next();
    }).catch((err) => {
        // Token is invalid
        console.log(err);
        response.status(401).send();
    });
};

module.exports = {
    authenticate
};