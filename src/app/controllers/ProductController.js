const axios = require("axios");

module.exports = {
  async getAllProducts(req, res) {
    try {
      const page = req.params.page;
      const url = `http://challenge-api.luizalabs.com/api/product/?page=${page}`;
      
      const { data } = await axios.get(url);
      const products = data.products;

      return res.send(products);
    } catch {
      return res
        .status(400)
        .send({ erro: "It was not possible to get the products" });
    }
  },

  async getProductById(req, res) {
    try {
      const id = req.params.id;
      const url = `http://challenge-api.luizalabs.com/api/product/${id}/`;

      const { data } = await axios.get(url);
      const product = data;

      return res.send(product);
    } catch {
      return res
        .status(400)
        .send({ erro: "It was not possible to get the product" });
    }
  },
};
