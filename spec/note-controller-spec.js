function testShowNoteHTML() {
  var controller = new NoteController();
    assert.isTrue(controller.noteList.notes[0]._text === 'James');
}

testShowNoteHTML();


function testHtmlOutput() {
  var noteListDouble = {
    store: function() {
      console.log('this is working')
    }
  };

    var text = "<ul><li><div>Cowabunga!!!!</div></li></ul>";

    function noteListViewDouble () {};

    noteListViewDouble.prototype = {
      displayHTML: function() { return text }
    };

    var notelistviewdouble = new noteListViewDouble();
    var noteController = new NoteController(noteListDouble);
    noteController.view = notelistviewdouble;

    noteController.showNoteHTML();
    assert.isTrue(document.getElementById('app').innerHTML === text)
    }

testHtmlOutput();
