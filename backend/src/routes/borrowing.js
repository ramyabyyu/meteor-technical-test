const { Router } = require("express");
const router = Router();

// middlewares
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

// controllers
const getAll = require("../controllers/borrowing/getAll");
const addOne = require("../controllers/borrowing/addOne");

router.get("/", verifyToken, isAdmin, getAll);
router.post("/:bookId", verifyToken, addOne);

module.exports = router;
