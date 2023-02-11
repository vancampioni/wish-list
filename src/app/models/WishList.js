"use strict";

module.exports = (sequelize, DataTypes) => {
  const WishList = sequelize.define(
    "WishList",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      customer_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {}
  );
  WishList.associate = function (models) {
    WishList.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
  };
  return WishList;
};
