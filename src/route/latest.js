import { Router } from "express";
const router = Router();

import { getLatest, createLatest } from "./../controller/latest.js";

router.route("/").get(getLatest).post(createLatest);

export default router;
