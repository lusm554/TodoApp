const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()
const PORT = config.get('port')

mongoose.connect(config.get('MongoId'), {useNewUrlParser: true, useUnifiedTopology: true}).catch(
    (err) => {
        throw err;
    }
)

let whiteList = ['http://127.0.0.1:4001/']
let corsOptions = {
    origin(origin, callback) {
        if (whiteList.includes(origin) || !origin) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

const proxyOptions = {
    target: 'http://localhost:3000', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
};

const Proxy = createProxyMiddleware(proxyOptions);

app.use(cors(corsOptions))

app.use('/api', bodyParser.json(), Proxy, require('./src/routes/routeTasks'))

app.listen(PORT || 4001)