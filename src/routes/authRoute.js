const User = require('../domain/user');

const route = require('express').Router();

const users = []


route.post('/login', (req, res) => {
    
})

route.post('/signup', (req, res) => {
    const data = req.body;
    const user = new User(data.name, data.username, data.pass);
    users.push(user);
    res.json({"message": 'ok'});
    console.log(users)
})


module.exports = route;