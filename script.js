var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e) {
  e.preventDefault();
  //   console.log('Working');
  var textInput = document.getElementById('item').value;
  console.log(textInput);

  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(textInput));

  var button = document.createElement('button');
  button.className = 'btn btn-danger btn-sm float-right delete';
  button.appendChild(document.createTextNode('X'));

  //   console.log(button);
  li.appendChild(button);

  itemList.appendChild(li);
}

function removeItem(e) {
  // if only the delete button is clicked
  if (e.target.classList.contains('delete')) {
    // console.log('delete clicked');
    if (confirm('Are you sure?')) {
      // the target <li>, which is parentElement of the target delete button
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

var editButton = document.createElement('Button');
editButton.className = 'btn btn-primary btn-sm float-right mr-2 edit';
editButton.appendChild(document.createTextNode('Edit'));
// console.log(editButton);

var list = document.querySelectorAll('.list-group-item');
console.log(list);
for (var i = 0; i < list.length; i++) {
  list[i].appendChild(editButton);
}
