const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use( '/xss', (req, res, next) => {
    let isScript = false;
    for(const [key, val] of Object.entries(req.body)) {
        if(val === '<script>') isScript = true;
    }
    if(isScript) res.status(400).send('XSS protected');
    else res.status(200).send('No XSS');
});

app.use('/', indexRouter);

module.exports = app;
