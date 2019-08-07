const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const server = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-jiv32.mongodb.net/omnistack?retryWrites=true&w=majority',
{
    useNewUrlParser: true
});
server.use(cors());
server.use(express.json());
server.use(routes);
// killall -9 node
server.listen(3333);