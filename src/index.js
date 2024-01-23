import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { db } from "./database.js";
import latestRoute from "./route/latest.js";
import departamentRoute from "./route/departament.js";
import typeRoute from "./route/type.js";
import servicesRoute from "./route/services.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/latest", latestRoute);
app.use("/api/departament", departamentRoute);
app.use("/api/type", typeRoute);
app.use("/api/service", servicesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
