const User = require('../domain/user');

const route = require('express').Router();

const users = []


route.post('/login', (req, res) => {
    var bool = false;
    const data = req.body;
    users.forEach(u => {
        if (data.username === u.username 
            && data.pass === u.pass){
            bool = true;
        }});

    if (bool) return res.json({"message": 'ok'});
    
    else return res.json({"message": 'not ok'});

})

route.post('/signup', (req, res) => {
    const data = req.body;
    const user = new User(data.name, data.username, data.pass);
    users.push(user);
    res.json({"message": 'ok'});
    console.log(users)
})


module.exports = route;