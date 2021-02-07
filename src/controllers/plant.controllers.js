import { crudControllers } from "../utils/crud";
import { Plant } from "../models/plant.model";
import options from "../config";

export default crudControllers(Plant);

export const getSpecies = async (req, res) => {
  try {
    const limit = req.query.limit || options.dbQueryLimit;
    const offset = req.query.offset;

    const docs = await Plant
      .find()
      .skip(offset)
      .limit(limit)
      .sort({displayPid: 1})
      .select("displayPid")
      .lean()
      .exec();

    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
