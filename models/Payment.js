module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    moneyInput: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  Payment.associate = (models) => {
    Payment.hasOne(models.Order, {
      foreignKey: {
        name: "PaymentId",
      },
    });
  };
  return Payment;
};
