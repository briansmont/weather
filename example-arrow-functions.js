// var names = ['Brian', 'Kirstin', 'Benny'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Brian'));

// var person = {
//   name: 'Brian',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };

// person.greet();

//Challenge Area
function add(a, b) {
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

//rewrite with arrow functions:

//add statement with curly

var addStatement = (a,b) => {
  return a + b;
};
console.log(addStatement(4,7));

//add expression with one line
// one line function has IMPLICIT RETURN of right of arrow!
var addExpression = (a,b) => a + b;
console.log(addExpression(10,10));

// arrows are important because you might lose the "THIS" in the "this" binding when using within the function