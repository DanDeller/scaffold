var config = {
  port: 3000,
  endpoints: [
    {
      "name": "favorites",
      "route": "/favorites",
      "template": "/public/src/templates/favorites.ejs"
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
    },
    {
      "name": "product-single",
      "route": "/product-single",
      "template": "/public/src/templates/product-single.ejs"
    }
  ]
};

module.exports = config;