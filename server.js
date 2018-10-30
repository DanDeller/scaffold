/*=======================================================
SCAFFOLD SERVER.JS (EXPRESSJS)
  - Index is the only hardcoded route.
  - Set other routes in your config.js endpoints array.
=======================================================*/

const bodyParser = require('body-parser'),
      Promise    = require('bluebird'),
      readFile   = Promise.promisify(require('fs').readFile),
      express    = require('express'),
      config     = require('./config.js'),
      path       = require('path'),
      app        = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// set index route
app.get('/', (req, res) => {
  res.render(__dirname + '/public/src/views/index');
});

// Build endpoints from config object
config.endpoints.forEach((page) => {
  app.get(page.route, (req, res) => {
    const fullTemp = page.template,
          tempName = fullTemp.split('/')[4].split('.')[0];
    res.render(__dirname + '/public/src/views/' + tempName);
  });
});

// Listen for app to start
app.listen(config.port, () => console.log('Running on port 3000 (http://localhost:3000).'));