const express = require('express');
const router = express.Router();

// Define the /dashboard route
router.get('/dashboard', (req, res) => {
  // Handle the request and send a response
  res.send('Welcome to the dashboard!');
});

// Export the router
module.exports = router;