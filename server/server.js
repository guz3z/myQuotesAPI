//ADD ALL LIBRARIES WE WILL USE
const express = require('express');
const cors = require('cors');


//create server
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;


//All the quotes
let quotes = [
    "Celebrate Your Small Wins",
    "Surround Yourself With Motivated People",
    "All our dreams can come true, if we have the courage to pursue them",
    "The best time to plant a tree was 20 years ago. The second best time is now",
    "It’s hard to beat a person who never gives up.",
    "Everything you can imagine is real.",
    "Do one thing every day that scares you.",
    "It’s no use going back to yesterday, because I was a different person then",
    "Whatever you are, be a good one.",
    "Your passion is waiting for your courage to catch up.",
    "Don’t be afraid to give up the good to go for the great.",
    "People who wonder if the glass is half empty or full miss the point. The glass is refillable"
]

//GET's all quotes from array
app.get('/quotes', (req, res) => {
    res.json({all: quotes})
});

//Get's random quote
app.get('/', (req, res) => {
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    res.json({quote: quote})
});

app.listen(port, () => console.log(`Express departing now from http://localhost:${port}`));

module.exports = app;







