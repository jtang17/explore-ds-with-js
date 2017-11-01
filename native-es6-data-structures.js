// Set
// Set objects are collections of unique values (primitive or object refs)
// that you can iterate over

// Create a set by using an array
let myArray = [1, 2, 3, 3, 4, 4, 5];
let mySet = new Set(myArray);
console.log(mySet);

// Add to the set
mySet.add('6');
console.log(mySet);

// Add object to the set
let myObj = {
  a: 7,
  b: 8
};
mySet.add(myObj);
console.log(mySet);

// Add same object ref to set
mySet.add(myObj);
console.log(mySet);
// It does not add it because it has unique values or references

// Add a look alike object
mySet.add({
  a: 7,
  b: 8
});
console.log(mySet);

// Delete a value
mySet.delete('6');
console.log(mySet);

mySet.delete({
  a: 7,
  b: 8
});
console.log(mySet);

mySet.delete(myObj);
console.log(mySet);

mySet.forEach(function(val) {
  console.log(val);
});

console.log(mySet.size);
// Map

// WeakSet

// WeakMap
