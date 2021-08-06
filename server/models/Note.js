const { Schema, model } = require("mongoose");

const NoteSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Note = model("NOTE", NoteSchema);

module.exports = Note;
