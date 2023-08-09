import { Router } from "express";
import { addUser, getUsers } from "../controllers/user.js";
import { addExercise, getUserExerciseLog } from "../controllers/exercise.js";

const router = new Router();

router.post("/users", addUser);
router.get("/users", getUsers);
router.get("/users/:id/logs", getUserExerciseLog);
router.post("/users/:id/exercises", addExercise);

export default router;
