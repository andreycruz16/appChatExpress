const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

let messages = [];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    console.log(req.body);
    messages.push(req.body)
    res.sendStatus(200);
});


const server = app.listen(3000, () => {
    console.log('Server is listening on port', server.address().port)
});