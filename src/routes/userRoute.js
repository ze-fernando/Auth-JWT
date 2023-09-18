const route = require('express').Router();

const verify = require('../middlewares/verifyToken')

route.get('/home', verify, (req, res) => {
    res.json({"message": 'This is the home page'})
})


module.exports = route;