const express = require('express');
const router = express.Router();

// Sample data (in-memory database)
let items = [
  { name: 'John Doe', age: 30, occupation: 'Software Engineer' },
  { name: 'Jane Smith', age: 28, occupation: 'Data Analyst' },
];

// List all items
router.get('/', (req, res) => {
  res.render('index', { items });
});

// Add a new item
router.get('/add', (req, res) => {
  res.render('add');
});

router.post('/add', (req, res) => {
  const newItem = {
    name: req.body.name,
    age: parseInt(req.body.age), // Ensure age is parsed as an integer
    occupation: req.body.occupation,
  };

  items.push(newItem);
  res.redirect('/items');
});

// Edit an item
router.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  const item = items[id];
  res.render('edit', { id, item });
});

router.post('/edit/:id', (req, res) => {
  const id = req.params.id;
  const updatedItem = {
    name: req.body.name,
    age: parseInt(req.body.age), // Ensure age is parsed as an integer
    occupation: req.body.occupation,
  };

  items[id] = updatedItem;
  res.redirect('/items');
});

// Delete an item
router.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  items.splice(id, 1);
  res.redirect('/items');
});

module.exports = router;
