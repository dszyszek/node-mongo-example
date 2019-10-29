require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const route = require('./routes/route');
const mongoose = require('./db/mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());

app.use('/', route);

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});