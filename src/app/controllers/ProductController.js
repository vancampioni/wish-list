const axios = require('axios');

// async function getProducts(url, products, resolve, reject) {
//     const response = await axios.get(url)
//     .then((response) => {
//         const products = response['data'];
//         const productsColletion = products.concat(products['results']);

//         if(products['page_number'] >= 1 <= 440) {
//             getProducts(products['page_number'], productsColletion, resolve, reject);
//         } else {
//             resolve(productsColletion)
//         }
//     })
//     .catch((error) => {
//         return error;
//     })
// }

// async function getAllProducts () {
//     return new Promise((resolve, reject) => {
//         getProducts('http://challenge-api.luizalabs.com/api/product/?page=1', [], resolve, reject);
//     })
//     .then((response) => {
//         return response;
//     })
//     .catch((error) => {
//         return error;
//     });
// }

// return getAllProducts();

module.exports = {
    async getAllProducts(req, res) {
        const response = await axios.get('http://challenge-api.luizalabs.com/api/product/?page=1')
        
        return res.json(response);
    }
}