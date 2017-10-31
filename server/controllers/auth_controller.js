const users = require('./../models/users');
let id = 1;
8
module.exports = {
    login: (req, res, next) => {
        const { username, password } =  req.body;

        const user = users.find(user => user.username === username && user.password === password);

        if (user){
            req.session.user.username = user.username;
            res.status(200).send(req.session.user);
        } else{
            res.status(500).send('Unauthorized.')
        }

    },
    register: (req, res, next) => {
        const {username, password} = req.body;
        console.log("You`re console log")

        users.push({id, username, password});
        id++;
        req.session.user = username;
        res.status(200).send( req.session.user)
    },

    signout: (req, res, next) => {
        req.session.destroy();
        res.status(200).send(req.session);
    },

    getUser: (req, res, next) => {
        res.status(200).send(req.session.user);
    }

}
