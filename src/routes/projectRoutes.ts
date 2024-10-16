import { Router } from "express";
import { createProjects, getProjects } from "../controllers/projectController";

const router = Router();

router.get("/", getProjects);
router.post("/", createProjects);

export default router;
