import express from "express";
import userRoutes from "./routes/user.route";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

// global error handler
app.use(errorHandler);

export default app;
