// Deliverable - 1
// querySelectorAll
var items = document.querySelectorAll('.list-group-item');
console.log(items);

// making the 2nd item background color to green
items[1].style.backgroundColor = 'green';

// making the 3rd item invisible
items[2].style.display = 'none';

// Deliverable - 2
// changing font color to green for second item
items[1].style.color = 'green';

// changing odd items background to green
for (var i = 0; i < items.length; i += 2) {
  items[i].style.backgroundColor = 'green';
}
