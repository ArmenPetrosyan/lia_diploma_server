import mongoose from 'mongoose';
import Note from '../models/Note';
import config from '../config.json';

import htmlUtils from 'js-htmlencode';

const dbc = config.db;

export function dbConnect(){
	mongoose.connect(`mongodb://${dbc.host}:${dbc.port}/${dbc.name}`, { useMongoClient: true });
}
	
export function getNotes() {
	return Note.find({});
}

export function createNote({title, content, created, modified, meta}) {
	const note = new Note({
		content: htmlUtils.htmlEncode(content),
		title,
		created,
		modified,
		meta
	});	

	console.log(note);

	return note.save();
}

export function deleteNote(id) {
	return Note.findById(id).remove();
}