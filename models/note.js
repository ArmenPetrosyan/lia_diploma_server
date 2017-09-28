import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  author	: String,
  title    	: { type: String, dafault: 'Default title' },
  content  	: String,
  created  	: Date,
  modified 	: Date,
  meta     	: Schema.Types.Mixed
});

const Note = mongoose.model('Note', NoteSchema);

export default Note;