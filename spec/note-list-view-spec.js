function testNoteListViewable() {
  var list1 = new List();
  list1.store("A list of my favourite movies");

  listView = new ListView(list1);
  text = '<ul><li><div>A list of my favourite movies</div></li></ul>';
  assert.isTrue(listView.displayHTML() === text);
  console.log(listView.displayHTML());
}
testNoteListViewable();
