const express = require('express');
const bodyParser = require('body-parser');
const Twig = require('twig');

const app = express();

// Configure Twig as the template engine
app.set('view engine', 'html.twig');
app.set('views', './views');
app.engine('html.twig', Twig.__express);

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Import and use your route modules
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

// Define a default route
app.get('/', (req, res) => {
  res.redirect('/items');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
