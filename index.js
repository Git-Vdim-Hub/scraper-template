const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the scraper template.')
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));