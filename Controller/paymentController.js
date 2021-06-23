const { Payment, Order } = require("../models");

exports.createPayment = async (req, res, next) => {
  try {
    const { moneyInput, orderId } = req.body;

    const order = await Order.findByPk(orderId);

    const payment = await Payment.create({
      moneyInput: moneyInput,
    });

    await Order.update(
      {
        PaymentId: payment.id ? payment.id : null,
      },
      { where: { id: order.id } }
    );

    res.status(201).json({ payment });
  } catch (err) {
    next(err);
  }
};
