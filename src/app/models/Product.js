module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      price: DataTypes.DECIMAL,
      image: DataTypes.STRING,
      brand: DataTypes.STRING,
      title: DataTypes.STRING,
      review_score: DataTypes.DECIMAL,
    },
);

    Product.associate = function (models) {
        Product.belongsToMany(models.WishList, {through:
          "WishListsProduct",
          foreignKey: "product_id",
          as: "products",
        });
      };
  
    return Product;
  };
  