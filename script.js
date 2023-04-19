// Deliverable - 1
// querySelector
var item2 = document.querySelector('.list-group-item:nth-child(2)');

// making the 2nd item background color to green
item2.style.backgroundColor = 'green';

var item3 = document.querySelector('.list-group-item:nth-child(3)');
// making the 3rd item invisible
item3.style.display = 'none';

// Deliverable - 2
// changing font color to green for second item
document.querySelectorAll('.list-group-item')[1].style.color = 'green';

// changing odd items background to green
var oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
for (var i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = 'green';
}
