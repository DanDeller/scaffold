var config = {
  port: 3000,
  endpoints: [
    {
      "name": "favorites",
      "route": "/favorites",
      "template": "/public/src/templates/favorites.ejs"
    },
    {
      "name": "favorites-list",
      "route": "/favorites-list",
      "template": "/public/src/templates/favorites-list.ejs"
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
    },
    {
      "name": "current-order",
      "route": "/current-order",
      "template": "/public/src/templates/current-order.ejs"
    },
    {
      "name": "account-summary",
      "route": "/account-summary",
      "template": "/public/src/templates/account-summary.ejs"
    },
    {
      "name": "order-confirmation",
      "route": "/order-confirmation",
      "template": "/public/src/templates/order-confirmation.ejs"
    },
    {
      "name": "order-details",
      "route": "/order-details",
      "template": "/public/src/templates/order-details.ejs"
    },
    {
      "name": "order-history",
      "route": "/order-history",
      "template": "/public/src/templates/order-history.ejs"
    }
  ]
};

module.exports = config;