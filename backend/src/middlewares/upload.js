const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const encryptedName = crypto.randomBytes(10).toString("hex") + Date.now();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, encryptedName + path.extname(file.originalname));
  },
});

module.exports = multer({ storage, fileFilter });
