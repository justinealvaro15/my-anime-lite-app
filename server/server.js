const express = require('express');
const cors = require('cors');
const animeRouter = require('./routes/MyAnimeListRoute');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/anime/', animeRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
