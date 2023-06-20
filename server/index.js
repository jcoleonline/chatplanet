if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const session = require('express-session');
const Sequelize = require('sequelize');
const userRouter = require('./routes/user');
const dashboardRouter = require('./routes/dashboard');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('express-flash');
const { User } = require('./models');
const initializePassport = require('./passportconfig');
const { Server } = require("socket.io");
const cors = require("cors");



const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const express = require('express');
const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});


app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

initializePassport(
    passport,
    async (username) => await User.findOne({ where: { username } }),
    async (id) => await User.findByPk(id)
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(userRouter);
app.use(dashboardRouter);


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});