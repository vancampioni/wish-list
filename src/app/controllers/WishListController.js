const { WishList } = require('../models')

module.exports = {
    async store(req, res) {
        const { customer_id } = req.body;
        const wishList = await WishList.create({
            customer_id: customer_id
        })

        return res.json(wishList);
    } 
}