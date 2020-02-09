const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const patos = require('./patosModelos');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('hola')
});
app.get('/Fly', (req, res) => {
    const mallard = new patos();
    const patoCaucho = new patos();
    res.send(mallard.patoMallard());
    res.send(patoCaucho.patoCaucho());
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});