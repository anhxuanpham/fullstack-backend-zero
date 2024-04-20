const connection = require('../config/database')


const getHomePage = (req, res) => {
    let user = [];

    connection.query(
        'SELECT * FROM Will.Users u',
        function (err, results, fields) {
            user = results;
          console.log('>>>>>>>>>>results: ',results);
          console.log('>>>check user: ', user)
      
        }
      );

    console.log('>>>check user: ', user)
    res.send('Hello World!', user)
}

const getUser = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomePage,
    getUser
}