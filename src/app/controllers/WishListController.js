const { WishList } = require('../models')

module.exports = {
    async store(req, res) {
        const { customer_id } = req.body;
        if(!customer_id) {
            return res.status(400).json({
              status: 400,
              message: "Please, provide the customer id"
            })
          }
        const wishList = await WishList.create({
            customer_id: customer_id
        })


        return res.json(wishList);
    } 
}