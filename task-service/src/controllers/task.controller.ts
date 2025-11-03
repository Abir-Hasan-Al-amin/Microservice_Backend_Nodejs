import { NextFunction, Request, Response } from "express";
import Task from "../models/task.model";
import { publishTaskEvent } from "../rabbitmq/publisher";
// Create Task
export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await Task.create(req.body);
    await publishTaskEvent({
      event: "TASK_CREATED",
      taskId: task._id,
      userId: task.userId,
      title: task.title,
    });
    res.status(201).json({ success: true, task });
  } catch (err) {
    next(err);
  }
};

// Get all Tasks
export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, tasks });
  } catch (err) {
    next(err);
  }
};
