'use strict';

(function(exports){
  function List(){
    this.notes = [];
  }

  List.prototype.display = function() {
    return this.notes;
  }

  List.prototype.store = function(text) {
    var note = new Note(text);
    this.notes.push(note);
  };

  exports.List = List;
})(this);
