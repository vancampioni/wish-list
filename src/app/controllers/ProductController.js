const axios = require("axios");

module.exports = {
  async getAllProducts(req, res) {
      const page = req.params.page;
      const url = `http://challenge-api.luizalabs.com/api/product/?page=${page}`;
      console.log(url)
      const { data } = await axios.get(url);
      const products = data.products

     return res.send(products);
  },

  async getProductById(req, res) {
    const id = req.params.id;
    const url = `http://challenge-api.luizalabs.com/api/product/${id}/`;
    
    const { data } = await axios.get(url);
    const product = data

    return res.send(product)
  }
};
