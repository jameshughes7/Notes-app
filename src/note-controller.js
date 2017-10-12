'use strict';

(function(exports) {
  function NoteController() {

  NoteController.prototype.changeGreeting = function(word) {
    var greeting = document.getElementById('app');
    greeting.innerHTML = word;
  };
}

  exports.NoteController = NoteController;
})(this);
