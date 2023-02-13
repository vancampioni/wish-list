const { WishListsProduct } = require('../models')

module.exports = {
    async store(req, res) {
        const { wish_list_id, product_id } = req.body;

        const wish_list_product = await WishListsProduct.create({
            wish_list_id: wish_list_id,
            product_id: product_id
          });

        return res.json(wish_list_product);
    } 


}