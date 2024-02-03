const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory path
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the home page
app.get('/', (req, res) => {
  res.render('index', { botStatus: 'online' });
});

// Define a route for the ping endpoint
app.get('/ping', (req, res) => {
  res.status(200).send('Pong!');
});

// Start the web server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
