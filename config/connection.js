// Importing the mongoose library
const mongoose = require('mongoose');
// Connecting to the MongoDB database using the MongoDB URI provided in the environment 
// variables or using the default URI if the environment variable is not set
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/Thomas&Friends',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Exporting the connection to the database as a module
module.exports = mongoose.connection
