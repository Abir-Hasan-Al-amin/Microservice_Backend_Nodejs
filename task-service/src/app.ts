import express from "express";
import taskRoutes from "./routes/task.route";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());

app.use("/api/tasks", taskRoutes);

// Global error handler
app.use(errorHandler);

export default app;
