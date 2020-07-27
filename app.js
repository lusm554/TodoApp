const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = config.get('port')

mongoose.connect(config.get('MongoId'), {useNewUrlParser: true, useUnifiedTopology: true}).catch(
    (err) => {
        throw err;
    }
)

let whiteList = ['http://localhost:4000']
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

app.use(cors(corsOptions))

app.use('/api', bodyParser.json(), require('./src/routes/routeTasks'))

app.listen(PORT)