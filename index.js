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

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/catagories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const catagoriesNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(catagoriesNews);
    }

})


app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})