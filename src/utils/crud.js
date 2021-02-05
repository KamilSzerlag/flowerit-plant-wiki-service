import options from '../config';

export const getOne = (model) => async (req, res) => {
  try {
    const doc = await model
      // .findOne({ owner: req.owner._id, _id: req.params.itemId })
      .findOne({ _id: req.params.plantId })
      .lean()
      .exec();

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getMany = (model) => async (req, res) => {
  try {
    const limit = req.query.limit || options.dbQueryLimit;
    const offset = req.query.offset;

    const docs = await model
      // .find({ owner: req.owner._id })    For specific owner
      .find()
      .skip(offset)
      .limit(limit)
      .lean()
      .exec();

    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const crudControllers = (model) => ({
  getMany: getMany(model),
  getOne: getOne(model),
});
