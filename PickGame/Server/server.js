const express = require('express');
const server = express();

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Token, MODE, Environment, OwnerId, EventName, CustomHeader');
    next();
}

server.use(allowCrossDomain);

server.get('/test', (req, res) => {
    console.log(req.ip,"ips");
    let names = { name: "bini", age: 22 };
    res.json(JSON.stringify(names));
});

//server.use('/api/auth', require('./routes/api/auth'));

server.get('/', function(req, res) {   
    //res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

const PORT = 4200;

server.listen(PORT, () => {
    console.log("server running at ",PORT); 
}).timeout = 700000;
