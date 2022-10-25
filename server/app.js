require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { itemRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_, res) => res.send('Welcome to HOMEPAGE'));

app.use('/items', itemRouter);

app.listen(process.env.PORT || 4321, () => console.log('server running on port: ', process.env.PORT || 4321));

module.exports = app;
