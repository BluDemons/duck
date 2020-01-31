const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const duck = require('./ejemplo');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(duck);
});
app.get('/Fly', (req, res) => {});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});