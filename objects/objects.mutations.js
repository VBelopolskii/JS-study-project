// 'use strict';
//=================== 1 ======================
const arr1 = ['a', 'c', 'b'];
const arr2 = ['b', 'c', 'a'];

// Why do errors happen?
console.assert(arr1.sort() !== arr1, printMsg({errorMsg: 'Should be equal.'}))
console.assert(arr1.sort() === arr2.sort(), printMsg({errorMsg: 'Should not be equal.'}))

//=================== 2 ======================

const obj = {
    value: 1010,
    someOtherValue: {
        value: 'blablabla'
    }
}

Object.freeze(obj);
const value = 9999;
obj.value = value; // Do uncomment the first line of the file - 'use strict'. Why does the error happen?

const someValue = 'new value';
obj.someOtherValue.value = someValue;

// Why do errors happen?
console.assert(obj.value === value, printMsg({errorMsg: 'value. Should not be equal.'}))
console.assert(obj.someOtherValue.value !== someValue, printMsg({errorMsg: 'someOtherValue. Should be equal.'}))


//=================== 3 ======================
const arrObj1 = [{ firstName: 'Test' }];
// инициализируем второй массив, содержимое - нулевой элемент первого массива
const arrObj2 = [arrObj1[0]];

arrObj2[0].firstName = 'Blabla';

//Почему ошибка и как пофиксить?
console.assert(arrObj1[0].firstName === 'Test', printMsg({errorMsg: 'firstName. Should not be equal.'}))


//=================== 4 ======================

let a1 = {
    date: '2000',
};

let b1 = 'Hello world!';

let c1 = ['Big', 'Small', 'Medium'];

let a2 = a1;
let b2 = b1;
let c2 = c1;


a2.date = '1999';
b2 = 'Make peace! No War!';
c2[2] = 'Nothing';

// разобраться почему возникают ошибки
console.assert(a1.date === '2000', printMsg({errorMsg: 'Dates. Should not be equal.'}))
console.assert(a1 !== a2, printMsg({errorMsg: 'Objects. Should be equal.'}))
console.assert(b1 !== 'Hello world!', printMsg({errorMsg: 'Hello world!. Should be equal.'}))
console.assert(c1[2] === 'Small', printMsg({errorMsg: 'Array object. Should not be equal.'}))



function printMsg() {
    // return  console.log('Error log %o', arguments[0])
    return `Error: ${arguments[0].obj || ''} ${arguments[0].errorMsg}`
}
