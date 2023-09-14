const User = require('../domain/user');

const route = require('express').Router();

const secretKey = "z5*a5%s9@p0ºz44¨";

const jwt = require('jsonwebtoken');

const users = [
    {name: "joao", username: "jao", pass: "joao123"},
    {name: "jose", username: "ze", pass: "jose123"}
]


route.post('/login', (req, res) => {
    const {username, pass} = req.body;
    const user = users.find((u) => u.username === username && u.pass === pass);
    
    if (!user) return res.status(401).json({"error": "Invalid keys"});

    const token = jwt.sign({ username: user.username },
        secretKey, {expiresIn: '30min'});

    res.json({token})
})

route.post('/signup', (req, res) => {
    const data = req.body;
    const user = new User(data.name, data.username, data.pass);
    users.push(user);
    res.json({"message": 'ok'});
    console.log(users)
})


module.exports = route;