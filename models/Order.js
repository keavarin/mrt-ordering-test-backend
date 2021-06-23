module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    TotalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Station, {
      foreignKey: {
        name: "StationId",
      },
    });
    Order.belongsTo(models.Payment, {
      foreignKey: {
        name: "PaymentId",
      },
    });
  };
  return Order;
};
