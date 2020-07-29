const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
// const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()
const PORT = config.get('port')

mongoose.connect(config.get('MongoId'), {useNewUrlParser: true, useUnifiedTopology: true}).catch(
    (err) => {
        throw err;
    }
)

// let whiteList = ['http://127.0.0.1:4001/', 'http://127.0.0.1:3000/']
// let corsOptions = {
//     origin(origin, callback) {
//         if (whiteList.includes(origin) || !origin) {
//             callback(null, true)
//         }
//         else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

app.use(cors())

app.use('/api', bodyParser.json(), require('./src/routes/routeTasks'))

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT || 3000, () => {
    console.log(`http://localhost:${PORT || 3000}`)
})