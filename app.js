import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import musicRoutes from "./routes/musicRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
// connectDB();

const app = express();

app.use(express.json());
app.use("/music", musicRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
