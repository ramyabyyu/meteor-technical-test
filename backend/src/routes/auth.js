const { Router } = require('express');
const router = Router();

// middlewares
const validate = require('../middlewares/validateAuth');

// controllers
const signUp = require('../controllers/user/signUp');
const signIn = require('../controllers/user/signIn');

router.post('/sign-up', validate.signUp, signUp);
router.post('/sign-in', validate.signIn, signIn);

module.exports = router;
