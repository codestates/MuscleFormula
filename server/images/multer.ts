const multer = require("multer");
const userStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/Users/taegwonson/Desktop/GG/server/images/userImages");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
  limits: { fileSize: 5 * 1024 * 1024 },
});
const postStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/Users/taegwonson/Desktop/GG/server/images/postImages");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
  limits: { fileSize: 5 * 1024 * 1024 },
});

const userUpload = multer({ storage: userStorage });
const postUpload = multer({ storage: postStorage });
module.exports = userUpload;
module.exports = postUpload;
