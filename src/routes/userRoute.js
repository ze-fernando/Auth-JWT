const route = require('express').Router();

route.get('/home', (req, res) => {
    res.json({"route": 'home'})
})


module.exports = route;