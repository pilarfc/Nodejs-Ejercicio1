var express = require('express'); 
var path = require('path');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}); 

app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'assets')));

app.listen(8080);

