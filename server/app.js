require('dotenv').config();
const cors = require('cors')
const express = require('express');
const { itemRouter } = require('./routes');
const { mongoose } = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => res.send('Welcome to HOMEPAGE'));   
// app.use('/items', itemRouter);

app.listen(process.env.PORT || 4321, () => console.log('server running on port: ', process.env.PORT || 4321));

  module.exports = app;