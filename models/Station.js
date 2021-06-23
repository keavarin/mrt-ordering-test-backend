module.exports = (sequelize, DataTypes) => {
  const Station = sequelize.define("Station", {
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Station.associate = (models) => {
    Station.hasOne(models.Order, {
      foreignKey: {
        name: "StationId",
      },
    });
  };
  return Station;
};
