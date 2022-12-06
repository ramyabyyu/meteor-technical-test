const { Router } = require("express");
const router = Router();
const role = require("../seed/Role");
const admin = require("../seed/Admin");
const category = require("../seed/Category");

router.post("/role", role);
router.post("/admin", admin);
router.post("/category", category);

module.exports = router;
