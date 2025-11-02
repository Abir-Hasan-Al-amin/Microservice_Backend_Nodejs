import express from "express";
import { createTask, getTasks } from "../controllers/task.controller";
import validateRequest from "../utils/validateRequest";
import { createTaskSchema } from "../validation/task.zod";

const router = express.Router();

router.post("/", validateRequest(createTaskSchema), createTask);
router.get("/", getTasks);

export default router;
