import express from 'express';
import bodyParser from 'body-parser';
import * as db from './controllers/db';

import { port } from './config.json';

db.dbConnect();

const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  req.header("Content-type", "application/x-www-form-urlencoded");
  next();
});

app.get('/notes', (req, res) => {
	db.getNotes().then( data => res.send(data) );
});

app.post('/notes', (req, res) => {
	db.createNote(req.body).then( data => res.send(req.body) );
});

app.delete('/notes/:id', (req, res) => {
	db.deleteNote(req.params.id).then( data => res.send(data) );
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
