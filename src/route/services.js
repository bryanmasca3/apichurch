import { Router } from "express";
const router = Router();

import { getServices, createServices } from "./../controller/services.js";

router.route("/").get(getServices).post(createServices);

export default router;
