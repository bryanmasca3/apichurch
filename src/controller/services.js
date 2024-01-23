import { servicesModel } from "./../model/services.js";
export const getServices = async (req, res) => {
  try {
    const latest = await servicesModel.aggregate([
      {
        $lookup: {
          from: "departaments",
          localField: "departament",
          foreignField: "_id",
          as: "departament",
        },
      },
      {
        $unwind: "$departament",
      },
      {
        $set: {
          begintime: {
            $dateToString: {
              format: "%H:%M",
              date: "$begintime",
              timezone: "America/New_York",
            },
          },
          endtime: {
            $dateToString: {
              format: "%H:%M",
              date: "$endtime",
              timezone: "America/New_York",
            },
          },
        },
      },
    ]); 
    res.status(200).json({ message: "SUCCESS", data: latest });
  } catch (error) {
    res.status(404).json({ message: "ERROR" });
  }
};
export const createServices = async (req, res) => {
  const data = req.body;
  try {
    const latest = await servicesModel.create(data);
    res.status(200).json({ message: "SUCCESS", data: latest });
  } catch (error) {
    res.status(400).json({ message: "ERROR" });
  }
};
