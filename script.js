var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

headerTitle.style.borderBottom = 'solid 4px #000';

var addItem = document.getElementsByClassName('title');
console.log(addItem);
addItem[0].style.fontWeight = 'bold';
addItem[0].style.color = 'green';

var li = document.getElementsByClassName('list-group-item');

li[2].style.backgroundColor = 'green';
for (var i = 0; i < li.length; i++) {
  li[i].style.fontWeight = 'bold';
}
