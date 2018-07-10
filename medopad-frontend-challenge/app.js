const express = require('express');
const app = express();
const data = require('./data.json');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
    next();
});

app.get('/', (req, res) => {
    res.send('Good luck! :)');
});

app.get('/heartrate', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
});

app.listen(3000, () => {
    console.log('Server running on port 3000.');
});