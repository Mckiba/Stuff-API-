const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();
var cors = require('cors')
bodyParser = require('body-parser')
const app = express();

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}));


app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// Initialize DB
require('./initDB')();

const EventRoute = require('./Routes/Event.route');
app.use('/events', EventRoute);

//404 handler and pass to error handler
app.use((req, res, next) => {
  next(createError(404, 'Not found'));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});
