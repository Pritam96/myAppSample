// TRAVERSING THE DOM

var itemList = document.querySelector('#items');

// parentElement
console.log(itemList.parentElement); // div#main.card.card-body
// changing backgroundColor
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// chaining parentNode
console.log(itemList.parentElement.parentElement); // div.container

console.log(itemList.parentElement.parentElement.parentElement); // body

// children
console.log(itemList.children);
itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
console.log(itemList.firstChild);

// lastChild
console.log(itemList.lastChild);

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
console.log(itemList.nextSibling);

// previousSibling
console.log(itemList.previousSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// create a new div
var newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title', 'hello-div');

// create a text node
var newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);

// add the div to our dom
var container = document.querySelector('header .container');

// console.log(container);

var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';

console.log(newDiv);

// Task - 7 add Hello Word before item 1

var text = document.createTextNode('Hello World');
var div = document.createElement('div');
div.appendChild(text);

var ul = document.querySelector('ul');
// console.log(ul);

var item1 = document.querySelector('.list-group-item');
// console.log(item1);

ul.insertBefore(div, item1);
