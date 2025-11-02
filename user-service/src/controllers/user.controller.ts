import { Request, Response } from "express";
import { User } from "../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const exists = await User.findOne({ email });
  if (exists) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const user = await User.create({ name, email });
  res.status(201).json({ message: "User created", user });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json({ count: users.length, users });
};
