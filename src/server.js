require('dotenv').config();
const express = require('express');
const path = require('path');

const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine

configViewEngine(app);

//config static file

app.use(express.static(path.join(__dirname, 'public')));

//khai báo route

app.use('/v1', webRoutes)

//test connection

connection.query(
  'SELECT * FROM Will.Users u',
  function (err, results, fields) {
    console.log('>>>>>>>>>>results: ',results);

  }
);



app.listen(port, hostname, () => {
  console.log(`Server has been start on ${port}`)
  //console.log(connection)
})