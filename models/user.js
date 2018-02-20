import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  author	: String,
  title    	: { type: String, dafault: 'Default title' },
  content  	: String,
  created  	: Date,
  modified 	: Date,
  starred   : Boolean
});

const Note = mongoose.model('Note', NoteSchema);

export default Note;