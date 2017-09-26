import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  id       : { type: Number, required: true },
  created  : { type: Date, default: Date.now },
  title    : { type: String, dafault: 'Default title' },
  content  : String,
  modified : Date,
  meta     : Schema.Types.Mixed
});

const Note = mongoose.model('Note', NoteSchema);