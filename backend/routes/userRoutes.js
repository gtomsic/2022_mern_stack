const router = require("express").Router();

const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const { auth } = require("../middlewares/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/info", auth, getUser);

module.exports = router;
