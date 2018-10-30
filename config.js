var config = {
  port: 3000,
  endpoints: [
    {
      "name": "test",
      "route": "/test",
      "template": "/public/src/templates/test.ejs"
    },
    {
      "name": "products",
      "route": "/products",
      "template": "/public/src/templates/products.ejs"
    },
    {
      "name": "login",
      "route": "/login",
      "template": "/public/src/templates/login.ejs"
    },
    {
      "name": "account-select",
      "route": "/account-select",
      "template": "/public/src/templates/account-select.ejs"
    }
  ]
};

module.exports = config;