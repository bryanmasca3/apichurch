import { latestModel, typeModel } from "./../model/latest.js";
export const getLatest = async (req, res) => {
  //const sizedata =
  // req.query.limit && Number(req.query.limit) && req.query.limit > 0
  //    ? { $limit: Number(req.query.limit) }
  //    : {};

  try {
    const latest = await latestModel.aggregate([
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
        $lookup: {
          from: "types",
          localField: "state",
          foreignField: "_id",
          as: "state",
        },
      },
      {
        $unwind: "$state",
      },
      { $sort: { beginday: -1 } },

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
          beginday: {
            $dateToString: {
              format: "%d-%m-%Y", // Formato de la fecha
              date: "$beginday",
              timezone: "America/New_York",
            },
          },
          endday: {
            $dateToString: {
              format: "%d-%m-%Y", // Formato de la fecha
              date: "$endday",
              timezone: "America/New_York",
            },
          },
        },
      },
      //sizedata,
    ]);
    console.log(latest);
    res.status(200).json({ message: "SUCCESS", data: latest });
  } catch (error) {
    res.status(400).json({ message: "ERROR" });
  }
};
export const createLatest = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const latest = await latestModel.create(data);

    res.status(200).json({ message: "SUCCESS", data: latest });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
