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
      "name": "personal-info",
      "route": "/personal-info",
      "template": "/public/src/templates/personal-info.ejs"
    },
    {
      "name": "account-selection",
      "route": "/account-selection",
      "template": "/public/src/templates/account-selection.ejs"
    }
  ]
};

module.exports = config;