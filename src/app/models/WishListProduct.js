// module.exports = (sequelize, DataTypes) => {
//     const WishList = sequelize.define("WishListProduct", {
//         id: {
//             type: DataTypes.UUID,
//             primaryKey: true,
//             defaultValue: DataTypes.UUIDV4,
//         },
//         product_id: DataTypes.STRING
//     })

//     return WishList;
// };

"use strict";

module.exports = (sequelize, DataTypes) => {
  const WishListProduct = sequelize.define(
    "WishListProduct",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      wish_list_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      product_id: DataTypes.STRING,
    },
    {}
  );
  WishListProduct.associate = function (models) {
    WishListProduct.belongsTo(models.WishList, {
      foreignKey: "wish_list_id",
      as: "wish_list",
    });
  };
  return WishListProduct;
};
