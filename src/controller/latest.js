import { latestModel, typeModel } from "./../model/latest.js";
export const getLatest = async (req, res) => {
  try {
    const latest = await latestModel.find();
    res.status(200).json({ message: "SUCCESS", data: latest });
  } catch (error) {
    res.status(400).json({ message: "ERROR" });
  }
};
export const createLatest = async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    const latest = await latestModel.create(data);

    res.status(200).json({ message: "SUCCESS", data: latest });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
