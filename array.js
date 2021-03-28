// ADD ELEMENT INTO ARRAY
//
// let arr = [
//     'first',
//     'second',
//     'third',
//     'fourth',
//     'fifth'
// ]
//
// let arr = [];
//
// function insertArrayElQuick(arr, index, item) {
//     let newArray = arr;
//     newArray.splice(index, 0, item);
//     return newArray;
// }
//
//
// arr = insertArrayElQuick(arr, 3, 'newItem');
//
// console.log("changed array: ", arr);

// ADD ELEMENT INTO ARRAY THROUGH THE LOOP

myArray = [0,1,2,3];

// function addArrayItem(arr, index, value) {
//
//     for (let i = arr.length; i > index; i--) {
//         arr[i] = arr[i-1];
//     }
//     arr[index] = value;
//
//     console.log("new array:", arr);
// }

// function addArrayItemWithWhileLoop(arr, index, value) {
//
//     if (index < 0 || index > arr.length) {
//         let exceptionMsg = "The index is out of the array length";
//         console.log(exceptionMsg);
//         return;
//     }
//     let i = arr.length;
//
//     while (i > index) {arr[i] = arr[--i]}
//
//     arr[index] = value;
//
//     return arr;
// }

// addArrayItemWithWhileLoop(myArray, 0, 666);
// console.assert(addArrayItemWithWhileLoop(myArray, 0, 666) === [666, 0, 1, 2, 3], {obj: myArray[0], errorMsg: 'Check new item\'s value'});
// console.log(addArrayItemWithWhileLoop(myArray, 0, 666));

// console.assert(myArray[0] === 666, {obj: myArray[0], errorMsg: 'Check new item\'s value'});
// console.assert(myArray.length === 5, {obj: myArray.length, errorMsg: 'Incorrect number of items'});
// addArrayItemWithWhileLoop(myArray, -1, 666);
// addArrayItemWithWhileLoop(myArray, 5, 666);
// console.assert(myArray[5] === 666, {obj: myArray[5], errorMsg: 'Check new item\'s value'});
// addArrayItemWithWhileLoop(myArray, 10, 666);
// console.assert(myArray.length === 6, {obj: myArray.length, errorMsg: 'Incorrect number of items'});

// ----------------------------------------------------

// ARRAY METHODS

// Add and remove items
let arr = ["I", "go", "home"];

// arr.length = 4;
arr.push('new');
console.log(arr);

let delArr = arr.splice(-2,2, 'and', 'go', 'to', 'bed');
console.log(arr);
console.log(delArr);
message(delArr);

function message(arrayEl) {
    console.log(`${arrayEl[0]} and ${arrayEl[1]} was deleted`)
}

// let arrayTrue = Array.isArray(arr);

// console.log(typeof arr);

// arr.splice(arr.length,1);
// console.log(arr);

// arr.splice(-1,1);
// console.log(arr);