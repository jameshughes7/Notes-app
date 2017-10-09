(function(exports){
  function testNoteIncludesText() {
    var note = new Note();

    if (note.getText() !== 'My favourite language is JavaScript') {
      throw new Error('String does not match');
    }
  }

  testNoteIncludesText();
}) (this);
