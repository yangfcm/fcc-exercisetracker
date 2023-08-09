import { Router } from "express";
import { addUser } from "../controllers/user.js";
import { addExercise, getUserExerciseLog } from "../controllers/exercise.js";

const router = new Router();

router.post("/users", addUser);
router.get("/users/:id/logs", getUserExerciseLog);
router.post("/users/:id/exercises", addExercise);

export default router;
