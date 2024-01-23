import { Router } from "express";
const router = Router();

import {
  getDepartament,
  createDepartament,
} from "./../controller/departament.js";

router.route("/").get(getDepartament).post(createDepartament);

export default router;
