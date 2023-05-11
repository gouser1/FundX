const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

const cors = require('cors');
app.use(
  cors({
    origin: ' ttps://fundx-jamesgilliland.herokuapp.com',
  })
);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const db = require('./models');

// Routers
const userRouter = require('./routes/users');
app.use('/auth', userRouter);

const postRouter = require('./routes/pitches');
app.use('/pitches', postRouter);

const favouritesRouter = require('./routes/favourites');
app.use('/favourite', favouritesRouter);

// listen to port and check models for tables

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on Port: ${PORT}`);
  });
});
