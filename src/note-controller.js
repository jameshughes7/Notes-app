'use strict';

(function(exports) {
  function NoteController(list = new List()) {
    this.noteList = list;
    this.noteList.store("James");
    this.view = new ListView(this.noteList);
  }

  NoteController.prototype.showNoteHTML = function() {
    var allNotes = this.view.displayHTML();
    document.getElementById('app').innerHTML = allNotes;
  };

  exports.NoteController = NoteController;
})(this);
