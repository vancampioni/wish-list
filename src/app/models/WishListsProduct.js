"use strict";

module.exports = (sequelize, DataTypes) => {
  const WishListProduct = sequelize.define("WishListsProduct", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    wish_list_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    product_id: DataTypes.UUID,
  });

  WishListProduct.associate = function (models) {
    WishListProduct.belongsTo(models.WishList, {
      foreignKey: "wish_list_id",
      as: "wish_list",
    });
    WishListProduct.belongsTo(models.WishList, {
      foreignKey: "wish_list_id",
    });
    WishListProduct.belongsTo(models.Product, {
      foreignKey: "product_id",
    });
  };

  return WishListProduct;
};
