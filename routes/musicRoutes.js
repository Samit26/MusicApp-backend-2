import express from "express";
import { getAllMusic } from "../controllers/musicController.js";

const router = express.Router();

router.get("/", getAllMusic);

export default router;
