var config = {
  port: 3000,
  endpoints: [
    {
      "name": "test",
      "route": "/test",
      "template": "/public/src/templates/test.html"
    },
    {
      "name": "products",
      "route": "/products",
      "template": "/public/src/templates/products.html"
    },
    {
      "name": "login",
      "route": "/login",
      "template": "/public/src/templates/login.html"
    }
  ]
};

module.exports = config;