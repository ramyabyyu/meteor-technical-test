const { Router } = require("express");
const router = Router();

// middlewares
const validateEmail = require("../middlewares/validateEmail");

// controllers
const signUp = require("../controllers/user/signUp");
const signIn = require("../controllers/user/signIn");

router.post("/signup", validateEmail, signUp);
router.post("/signin", signIn);

module.exports = router;
