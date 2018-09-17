const bodyParser = require('body-parser'),
      express    = require('express'),
      app        = express(),
      path       = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/src/templates/index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/src/templates/products.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/src/templates/login.html'));
});

app.listen(3000, () => console.log('Running on port 3000 (http://localhost:3000).'));