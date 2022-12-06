const { Router } = require("express");
const router = Router();

// controllers
const auth = require("./auth");
const book = require("./book");
const borrowing = require("./borrowing");

// seeder
const seeder = require("../routes/seed");

router.use("/user", auth);
router.use("/book", book);
router.use("/borrowing", borrowing);

router.use("/seed", seeder);

module.exports = router;
