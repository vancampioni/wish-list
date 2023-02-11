module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        price: DataTypes.NUMBER,
        image: DataTypes.STRING,
        brand: DataTypes.STRING,
        title: DataTypes.STRING,
        review_score: DataTypes.NUMBER,        
    })

    return Product;
};