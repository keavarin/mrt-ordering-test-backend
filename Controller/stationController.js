const { Station } = require("../models");

exports.getAllStation = async (req, res, next) => {
  try {
    const station = await Station.findAll();
    res.status(200).json({ station });
  } catch (err) {
    next(err);
  }
};

exports.bulkCreate = async (req, res, next) => {
  try {
    const { station } = req.body;

    for ({ name, price } of station) {
      if (!name || !name.trim())
        return res.status(400).json({ message: "name is require" });
      if (!price) return res.status(400).json({ message: "price is require" });
      if (!(+price > 0))
        return res
          .status(400)
          .json({ message: "price must numeric and greater than 0" });
    }
    await Station.bulkCreate(station);
    res.status(201).json({ message: "all station created" });
  } catch (err) {
    next(err);
  }
};
