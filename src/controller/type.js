import { typeModel } from "./../model/latest.js";
export const getType = async (req, res) => {
  try {
    const latest = await typeModel.find();
    res.status(200).json({ message: "SUCCESS", data: latest });
  } catch (error) {
    res.status(404).json({ message: "ERROR" });
  }
};
export const createType = async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    const latest = await typeModel.create(data);
    res.status(200).json({ message: "SUCCESS", data: latest });
  } catch (error) {
    res.status(400).json({ message: "ERROR" });
  }
};
