const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 

const auth = require('./src/routes/authRoute');
const user = require('./src/routes/userRoute');

app.use(auth);
app.use('/', user);


app.get('/redirect', (req, res) =>{
  res.redirect('/home')
})

app.listen(port, ()=>{
  console.log(`Server is running in ${port}..`);
});

module.exports = app