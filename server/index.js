if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const Sequelize = require('sequelize');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('express-flash');


const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

const initializePassport = require('./passportconfig');
initializePassport(
    passport,
    username => users.find(user => user.username === username),
    id => users.find(user => user.id === id)
)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(userRouter)
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});