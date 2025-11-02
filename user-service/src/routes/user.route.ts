import express from "express";
import { createUser, getUsers } from "../controllers/user.controller";
import { validateRequest } from "../utils/validateRequest";
import { createUserSchema } from "../validation/user.zod";

const router = express.Router();

router.post("/", validateRequest(createUserSchema), createUser);
router.get("/", getUsers);

export default router;
