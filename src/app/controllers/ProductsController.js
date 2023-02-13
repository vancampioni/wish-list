const { Product } = require('../models')

module.exports = {
    async store (req, res) {
        const { id, price, image, brand, title, review_score } = req.body;
    const product = await Product.create({
      id: id,
      price: price,
      image: image,
      brand: brand,
      title: title,
      review_score: review_score
    });

    return res.json(product);
    },
}