const route = require('express').Router();

route.get('/home', (req, res) => {
    res.send('home')
})


module.exports = route;