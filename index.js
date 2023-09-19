const express = require('express');
const app = express();

app.use(express.json()); 

const auth = require('./src/routes/authRoute');
const user = require('./src/routes/userRoute');

app.use(auth);
app.use('/', user);


app.get('/redirect', (req, res) =>{
  res.redirect('/home')
})

app.listen(3000, ()=>{
  console.log("run")
});
