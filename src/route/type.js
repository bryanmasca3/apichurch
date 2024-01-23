import { Router } from "express";
const router = Router();

import { getType, createType } from "./../controller/type.js";

router.route("/").get(getType).post(createType);

export default router;
