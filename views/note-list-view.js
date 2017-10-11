'use strict';

(function(exports) {
  function ListView(list = new List){
    this.list = list;
  }

  ListView.prototype.displayHTML = function() {
    for (var i = 0; i < this.list.notes.length; i++) {
      return ("<ul><li><div>" + this.list.notes[i]._text + "</div></li></ul>");
  }
};

  exports.ListView = ListView;
})(this);
