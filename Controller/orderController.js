const { Order, Payment, Station } = require("../models");

exports.createOrder = async (req, res, next) => {
  try {
    const { stationId, amount } = req.body;

    const station = await Station.findByPk(stationId);
    console.log("station", station.price);
    const order = await Order.create({
      TotalPrice: +station.price * +amount,
      amount: amount,
      StationId: stationId,
    });

    res.status(201).json({ order });
  } catch (err) {
    next(err);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({
      where: { id },
      include: [{ model: Station }],
    });

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};
