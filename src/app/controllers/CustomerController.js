const { Customer } = require("../models");

module.exports = {
  async store(req, res) {
    const { name, email_address } = req.body;
    const customer = await Customer.create({
      name: name,
      email_address: email_address,
    });
    return res.json(customer);
  },

  async getAllCustomers(req, res) {
    const customers = await Customer.findAll();

    return res.json(customers);
  },

  async getCustomerById(req, res) {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    
    return res.json(customer);
  },

  async updateCustomer(req, res) {
    const { name, email_address } = req.body;

    await Customer.update(
        { name, email_address },
        { where: { id: req.params.id } }
    );

    return res.status(200).send({ message: 'The customer has been updated' })
  },

  async deleteCustomer(req, res) {
    await Customer.destroy({
        where: { id: req.params.id }
    });

    return res.status(200).send({ message: 'The customer has been deleted' })
  }
};
