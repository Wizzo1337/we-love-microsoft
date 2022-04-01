// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.


// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// };

// console.log(camelize("-webkit-transition"));

// **Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)**

// function filterRange (arr, a ,b) {
//     return arr.filter((item, index) => (item >= a && item <= b))
// }

// console.log(filterRange([5, 3, 8, 1], 1, 4))

// **Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:**

// let arr = [5, 3, 8, 1];


// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// console.log(filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4
// console.log('this should be 3, 1', ( arr )); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order
// console.log(arr.sort((a,b) => b-a));

// console.log( 'this should be 8, 5, 2, 1, -10', arr ); // 8, 5, 2, 1, -10

// *****We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.*****

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// function copySorted () {
//   return arr.slice().sort()
// }

// console.log('this should be: CSS, HTML, JavaScript', sorted ); // CSS, HTML, JavaScript
// console.log('this should be: HTML, JavaScript, CSS (no changes)', arr); // HTML, JavaScript, CSS (no changes)

// ****Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:*****

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log('this should be John', arr[0].name); // John
// console.log('this should be Mary', arr[1].name); // Mary
// console.log('this should be Pete', arr[2].name); // Pete

// function sortByAge(users) {
// 	users.sort(function(a,b) {
// 		return a.age - b.age
// 	})
// }

// console.log(sortByAge(arr));

// let arr = [1, 2, 3];

// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// };

// console.log(shuffle(arr));

// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }

// console.log(camelize("background-color")) // 'backgroundColor';
// console.log(camelize("list-style-image")) // 'listStyleImage';
// console.log(camelize("-webkit-transition")) // 'WebkitTransition';

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   let newArr = arr.slice();
//   return newArr.filter(el => el >= a && el <= b)
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered);

// function filterRangeInPlace(arr, a, b) {
//   arr.filter()
// };

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// console.log('3, 1', arr ); // [3, 1]



