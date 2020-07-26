const express = require('express');
const config = require('config');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect(config.get('MongoId'), {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(bodyParser.json())

app.use('/api', require('./src/routes/routeTasks'))


const PORT = config.get('port')

app.listen(PORT)