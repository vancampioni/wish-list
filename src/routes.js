const routes = require("express").Router();
const authMiddleware = require('../src/app/middleware/auth')

const CustomerController = require("./app/controllers/CustomerController");
const SessionController = require('./app/controllers/SessionController');
const UserController = require('./app/controllers/UserController');
const WishListController = require("./app/controllers/WishListController");
const WishListsProductController = require("./app/controllers/WishListsProductController");


routes.post("/users", UserController.store)

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/customers', CustomerController.store);
routes.get('/customers', CustomerController.getAllCustomers);
routes.get('/customers/:id', CustomerController.getCustomerById);
routes.put('/customers/:id', CustomerController.updateCustomer);
routes.delete('/customers/:id', CustomerController.deleteCustomer);

routes.post('/wish-list', WishListController.store);

routes.post('/wish-list-products', WishListsProductController.store);

module.exports = routes;