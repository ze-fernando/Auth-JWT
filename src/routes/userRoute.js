const route = require('express').Router();

route.get('/home', (req, res) => {
    res.send('login')
})


module.exports = route;