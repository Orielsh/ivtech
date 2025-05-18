require('dotenv').config();
const morgan = require("morgan");
const connectDB = require('./dal/mongoose');
const express = require('express');
const cors = require('cors');

// Initialize express
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use('/api/auth', require("./routes/authRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/question', require("./routes/questionRoutes"));

const { PORT } = process.env;

// Connect to database
connectDB().then(() => {
    // Run server
    app.listen(PORT, () => console.log(`Server is listening for requests on http://127.0.0.1:${PORT}`))
  });   // first connect to db and only then start listen.

module.exports = app;