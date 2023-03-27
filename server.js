// Import required packages and files
const express =  require('express');
const db = require('./config/connection');
const routes = require('./routes');
// Set up environment variables
const PORT = process.env.PORT || 3001;
const app = express();
// Use middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use routes defined in routes.js
app.use(routes); 
// Connect to the MongoDB database and start the server
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  
// Please, reference the README.md for further insight
// Thank you for viewing!
// Thomas Calle 😊