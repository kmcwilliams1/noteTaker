const app = require('express').Router();
const path = require('path');

// GET Route for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/pages/notes.html'))
);


// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/pages/404.html'))
);

module.exports = app;