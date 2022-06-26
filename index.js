const express = require('express');
const app = express();

app.get('/', function (req, res) {
    
    return res.send('你好');
});

app.listen(8080);
console.log("PissCruft is Online.")