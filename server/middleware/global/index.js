const json = require('express').json;
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const SessionStorage = require('connect-session-knex')(session);
const db = require('../../../data/db-config');

const sessionStore = new SessionStorage({
    knex: db,
    clearInterval: process.env.SESSION_STORAGE_CLEAR_INTERVAL,
    tablename: 'user_sessions',
    sidfieldname: 'id',
    createTable: true
});

const sessionConfig = {
    name: 'coffee-recipe-tracker',
    secret: process.env.SESSION_COOKIE_SECRET,
    cookie: {
        maxAge: process.env.SESSION_MAX_AGE,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: sessionStore
};

module.exports = server => {
    server.use(helmet());
    server.use(cors());
    server.use(json());
    server.use(session(sessionConfig));
};