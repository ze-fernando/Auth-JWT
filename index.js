const express = require('express');
const app = express();

const auth = require('./src/routes/authRoute');

const user = require('./src/routes/userRoute');

app.use(express.json()); 

app.use('/', auth);

app.use('/', auth);

app.use('/', auth);


app.use('/', user)

app.listen(3000);
