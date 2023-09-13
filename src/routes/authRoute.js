const route = require('express').Router();

route.get('/login', (req, res) => {
    res.send('login')
})

route.get('/singup', (req, res) => {
    res.send('singup')
})

route.get('/logout', (req, res) => {
    res.send('logout')
})

module.exports = route;