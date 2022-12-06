const { Router } = require("express");
const router = Router();

// user || auth
const auth = require("./auth");
const book = require("./book");

router.use("/user", auth);
router.use("/book", book);

module.exports = router;
