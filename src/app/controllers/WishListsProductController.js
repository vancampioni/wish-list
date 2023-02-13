const { WishListsProduct } = require('../models')

module.exports = {
    async store(req, res) {
        const { wish_list_id, product_id } = req.body;

        if(!wish_list_id) {
          return res.status(400).json({
            status: 400,
            message: "Please, provide the wish list id"
          })
        }

        if(!product_id) {
          return res.status(400).json({
            status: 400,
            message: "Please, provide de product id"
          })
        }
        
        const wish_list_product = await WishListsProduct.create({
            wish_list_id: wish_list_id,
            product_id: product_id
          });


        return res.json(wish_list_product);
    } 


}