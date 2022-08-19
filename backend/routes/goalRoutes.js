const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { auth } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.route("/").get(auth, getGoals).post(auth, setGoal);
router.route("/:id").put(auth, updateGoal).delete(auth, deleteGoal);

module.exports = router;
