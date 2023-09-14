const express = require('express')
const sequelize = require('./config/db');
const User = require('./model/User');
const { body, check, validationResult } = require('express-validator');

let app = express()

let port = 5100;

// DB syncronyzing 

sequelize.sync()
  .then(() => {
    console.log('Database is synchronized.');
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });
app.use(express.json({ extended: false }))

app.post('/post-test', body('name').not().isEmpty(), (req, res) => {


  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return res.send("working fine")


})

app.use('/user', require('./routes/user.routes'))



app.use('/check', (req, res) => {
  console.log('home page');
  return res.status(200).json({
    "message": "Test api response"
  })
})

app.listen(port, () => console.log(`listning on port  ${port}`))
module.exports = app;



