'use strict';

(function(exports){
  function List(){
    this.notes = [];
  }

  List.prototype.display = function() {
    return this.notes;
  }

  List.prototype.store = function(text) {
    this.notes.push(new Note(text));
  };

  exports.List = List;
})(this);
