const { WishListProduct } = require('../models')

module.exports = {
    async store(req, res) {
        const { product_id } = req.body;
        const wish_list = WishListProduct.create({
            product_id
        })

        return res.json(wish_list);
    } 
}