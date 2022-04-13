//SECTION: Create router and import controller
const router = require('express').Router();
const authCtrl = require('../controllers').auth;

//SECTION: Routes - /auth/<>
router.get('/signup', authCtrl.signUpUser); //NOTE: Change to POST method after postman testing

//SECTION: Exports
module.exports = router