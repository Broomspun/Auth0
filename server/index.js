const express = require('express')
const path = require('path');

const cors = require('cors');
const jwt = require('express-jwt');
const router = express.Router();
const jwks = require('jwks-rsa');
const bodyParser = require('body-parser');
let courseRouter = require('./routes/courses');


const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(cors())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .use('/api', courseRouter)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
