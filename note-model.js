(function(exports) {
function Note() {
  this._text = ('My favourite language is JavaScript');

}

Note.prototype.getText = function() {
  return this._text;
};

exports.Note = Note;

})(this);
