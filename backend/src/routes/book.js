const { Router } = require("express");
const router = Router();

// middlewares
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

// controllers
const addOne = require("../controllers/book/addOne");
const getAll = require("../controllers/book/getAll");
const getOne = require("../controllers/book/getOne");
const editOne = require("../controllers/book/editOne");
const deleteOne = require("../controllers/book/deleteOne");

router.post("/", verifyToken, isAdmin, addOne);
router.get("/", getAll);
router.get("/:id", getOne);
router.patch("/:id", verifyToken, isAdmin, editOne);
router.delete("/:id", verifyToken, isAdmin, deleteOne);

module.exports = router;
