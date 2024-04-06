const express = require('express');
const {getHomePage} = require('../controllers/homeController');
const {getUser} = require('../controllers/homeController')
const router = express.Router();



router.get('/', getHomePage);

router.get('/user', getUser);

/*router.get('/user', (req, res) => {
    
    res.render('sample.ejs')
})
*/

module.exports = router;