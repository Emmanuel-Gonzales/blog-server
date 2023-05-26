'use strict';

const express = require('express');
const cors = require('cors');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const authRoutes = require('./auth/routes.js');
const logger = require('./middleware/logger.js');



const app = express();

// MW
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);


//routes
app.use(authRoutes);

//proof of life
app.get('/', (req, res, next) => {
  res.status(200).send('servers up');
});



//catchalls
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};

