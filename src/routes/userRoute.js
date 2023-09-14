const route = require('express').Router();

const verify = require('../middlewares/verifyToken')

route.get('/home', verify, (req, res) => {
    res.json({"route": 'home'})
})


module.exports = route;