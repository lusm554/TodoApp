const express = require('express');
const config = require('config');

const app = express();

app.get('/', (req, res) => {
    res.json({name: 'Ya', age: 16})
})

const PORT = config.get('port')

app.listen(PORT)