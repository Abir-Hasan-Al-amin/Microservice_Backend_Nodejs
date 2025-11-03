import dotenv from "dotenv";
import { startTaskListener } from "./rabbitmq/consumer";

dotenv.config();
startTaskListener();
