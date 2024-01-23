import { departamentModel } from "./../model/departament.js";
export const getDepartament = async (req, res) => {
  try {
    const latest = await departamentModel.find();
    res.status(200).json({ message: "SUCCESS",data: latest });
  } catch (error) {
    res.status(404).json({ message: "ERROR" });
  }
};
export const createDepartament = async (req, res) => {
  const data = req.body;
  try {
    const latest = await departamentModel.create(data);
    res.status(200).json({ message: "SUCCESS", data: latest });
  } catch (error) {
    res.status(400).json({ message: "ERROR" });
  }
};
