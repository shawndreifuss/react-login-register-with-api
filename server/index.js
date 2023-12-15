const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('./config/connection');
const routes = require('./routes');

dotenv.config();


const PORT = process.env.PORT || 3001;
const app = express();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet())
app.use(morgan('common'));
app.use(routes)


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${PORT} running on port ${PORT}!`);
  });
});
