console.log('Hello World');

const library = [
  {
    title: 'Learn JavaScript',
    author: 'Brad Traversy',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Learn React',
    author: 'Brad Traversy',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Learn Node Js',
    author: 'Brad Traversy',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Learn Express Js',
    author: 'Brad Traversy',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
const { title: firstBook } = library[0];

console.log(firstBook);
const jsonFile = JSON.stringify(library);
// console.log(library);
console.log(jsonFile);

((length, width) => {
  const area = length * width;
  console.log(
    `Area of length ${length} and width ${width} rectangle is ${area}.`
  );
})(10, 5);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}

// const youngPeople = people
//   .filter((p) => p.age <= 25)
//   .map((person) => ({
//     name: person.firstName + ' ' + person.lastName,
//     email: person.email,
//   }));

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum);

const words = ['coder', 'programmer', 'developer'];

capitalizeWords = words.map(
  (word) => word[0].toUpperCase() + word.substring(1)
);

console.log(capitalizeWords);
