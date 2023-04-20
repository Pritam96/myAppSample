var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();
  //   console.log('Working');
  var textInput = document.getElementById('item').value;
  console.log(textInput);

  // get description
  var description = document.getElementById('description').value;

  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(textInput + ' : ' + description));

  var button = document.createElement('button');
  button.className = 'btn btn-danger btn-sm float-right delete';
  button.appendChild(document.createTextNode('X'));

  var editButton = document.createElement('Button');
  editButton.className = 'btn btn-primary btn-sm float-right mr-2 edit';
  editButton.appendChild(document.createTextNode('Edit'));

  li.appendChild(button);

  // adding Edit button
  button.parentNode.insertBefore(editButton, button.nextSibling);

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

// adding Edit Buttons
const deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach((button) => {
  // Create a new edit button
  var editButton = document.createElement('Button');
  editButton.className = 'btn btn-primary btn-sm float-right mr-2 edit';
  editButton.appendChild(document.createTextNode('Edit'));

  // Insert the edit button after the delete button
  button.parentNode.insertBefore(editButton, button.nextSibling);
});

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
