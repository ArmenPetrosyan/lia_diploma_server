import mongoose from 'mongoose';
import Note from '../models/Note';
import Note from '../models/User';
import config from '../config.json';

import htmlUtils from 'js-htmlencode';

const dbc = config.db;

export function dbConnect(){
	mongoose.connect(`mongodb://${dbc.host}:${dbc.port}/${dbc.name}`, { useMongoClient: true });
}
	
export function getNotes() {
	return Note.find({});
}

export function getNote(title) {
	return Note.find({
		'title': title
	});
}

export function createNote({title, content, created, modified, starred}) {
	const note = new Note({
		content,
		title,
		created,
		modified,
		starred
	});	

	console.log(note);

	return note.save();
}
// {title, content, created, modified, starred}
export function updateNote(id, data) {
	let updObj = {};
	let keys = Object.keys(data);
	keys.forEach(key => {
		Object.assign(updObj, {[key]:data[key]})
	})

	console.log(updObj);
	return Note.findById(id).update(updObj);
}

export function deleteNote(id) {
	return Note.findById(id).remove();
}

export function deleteNoteByTitle(title) {
	return Note.find({
		'title': title
	}).remove();
}

// Lia's diploma
export function createUser({login, password}) {
	const note = new Note({
		content,
		title,
		created,
		modified,
		starred
	});

	console.log(note);

	return note.save();
}