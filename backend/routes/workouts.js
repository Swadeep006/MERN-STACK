const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutContoller");

const router = express.Router();

// to get all workouts
router.get("/", getWorkouts);

// to get single workout
router.get("/:id", getWorkout);

// post a new workout
router.post("/", createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

//update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
