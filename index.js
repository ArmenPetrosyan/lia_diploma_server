import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('azazaza');
});

const server = app.listen(8080, () => {
    console.log('Server is running');
})
