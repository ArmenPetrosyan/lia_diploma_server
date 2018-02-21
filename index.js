import express from 'express';
import bodyParser from 'body-parser';
import * as db from './controllers/db';

import { port } from './config.json';

db.dbConnect();

const app = express();
 
app.use(bodyParser.json({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, DELETE');
  req.header("Content-Type", "application/json");
  next();
});

app.get('/notes', (req, res) => {
	db.getNotes().then( data => {console.log(data); 	res.send(data)} );
});

app.post('/notes', (req, res) => {
	db.createNote(JSON.parse(Object.keys(req.body)[0])).then( data => res.send(req.body) );
});

app.put('/notes/:id', (req, res) => {
	db.updateNote(req.params.id, JSON.parse(Object.keys(req.body)[0])).then( data => res.send(req.body) );
});

app.get('/notes/:title', (req, res) => {
	db.getNote(req.params.title).then( data => res.send(data) );
});

// app.get('/notes/:id', (req, res) => {
// 	db.getNote(req.params.id).then( data => res.send(data) );
// });

app.delete('/notes/:id', (req, res) => {
	db.deleteNote(req.params.id).then( data => res.send(data) );
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post('/user', (req, res) => {
  db.createUser(req.body).then( data => res.send(req.body) );
});

app.get('/user/:login', (req, res) => {
  db.getUser(req.params.login).then( data => res.send(data) );
});
