const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const catagories = require('./data/catagories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/catagories', (req, res) => {
    res.send(catagories)
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})