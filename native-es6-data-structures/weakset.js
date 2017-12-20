// WeakSet
// WeakSets are collections of unique objects only
// An object in the WeakSet may only occur once
// They weakly hold objects, meaning that if there is no
// other reference to an object stored in the WeakSet
// they can be garbage collected
// There is no list of current objects stored in the collection
// WeakSets are not enumerable

let myWeakSet = new WeakSet();

let objA = {
  color: 'red',
};

myWeakSet.add(objA);
console.log(myWeakSet);





// myWeakSet.add(objA);
// console.log(myWeakSet);





// let objB = {
//   color: 'orange'
// };
// myWeakSet.add(objB);
// console.log(myWeakSet);





// myWeakSet.add({
//   color: 'yellow'
// });
// console.log(myWeakSet);





// // Get the size
// console.log(myWeakSet.length);
// // Just kidding can't get the size
// // MDN says length should be 0




// // Check if it has a value
// console.log(myWeakSet.has(objB));





// console.log(myWeakSet.has({color: 'orange'}));





// // Delete
// myWeakSet.delete(objB);
// console.log(myWeakSet);





// myWeakSet.delete({color: 'yellow'});
// console.log(myWeakSet);