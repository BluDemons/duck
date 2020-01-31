const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Duck = require('./pato');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('hola')
});
app.get('/Fly', (req, res) => {
    const mallard = new Duck();
    res.send(mallard.performFly().fly());
    res.send(mallard.performQuack().quack());
    res.send(mallard.performFly().FlyNoWay());
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});