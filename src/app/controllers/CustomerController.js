const { Customer } = require("../models");

module.exports = {
  async store(req, res) {
    try {
      const { name, email_address } = req.body;

      if (!name || !email_address) {
        return res.status(400).json({
          status: 400,
          message: "All the fields are required",
        });
      }

      const customer = await Customer.create({
        name: name,
        email_address: email_address,
      });

      return res.json(customer);
    } catch {
      return res
        .status(400)
        .send({ erro: "It was not possible to create a new customer" });
    }
  },

  async getAllCustomers(req, res) {
    try {
      const customers = await Customer.findAll();

      return res.json(customers);
    } catch {
      return res
        .status(400)
        .send({ erro: "It was not possible to get the customers" });
    }
  },

  async getCustomerById(req, res) {
    try {
      const { id } = req.params;
      const customer = await Customer.findByPk(id);

      return res.json(customer);
    } catch {
      return res
        .status(400)
        .send({ erro: "It was not possible to get the customer" });
    }
  },

  async updateCustomer(req, res) {
    try {
      const { name, email_address } = req.body;
  
      await Customer.update(
        { name, email_address },
        { where: { id: req.params.id } }
      );
  
      return res.status(200).send({ message: "Customer has been updated" });

    } catch {
      return res.status(400).send({ erro: 'It was not possible to update the customer' });
    }
  },

  async deleteCustomer(req, res) {
    try {
      await Customer.destroy({
        where: { id: req.params.id },
      });
  
      return res.status(200).send({ message: "Customer has been deleted" });

    } catch {
      return res.status(400).send({ erro: 'It was not possible to delete the customer' });
    }
  },
};
