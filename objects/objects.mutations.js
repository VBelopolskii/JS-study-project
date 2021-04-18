// 'use strict';
//=================== 1 ======================
// let arr1 = ['a', 'c', 'b'];
// const arr2 = ['b', 'c', 'a'];
//
//
// // Why do errors happen?
// // sort() сортирует сам массив, и возврашает отсортированный массив, НЕ копию!
// // console.assert(arr1.sort() !== arr1, printMsg({errorMsg: 'Should be equal.'}))
// // === сравнивает массивы по ссылке, а не по значению
// // console.assert(arr1.sort() === arr2.sort(), printMsg({errorMsg: 'Should not be equal.'}))
//
// //=================== 2 ======================
//
// const obj = {
//     value: 1010,
//     someOtherValue: {
//         value: 'blablabla'
//     }
// }
//
// Object.freeze(obj);
// const value = 9999;
// obj.value = value; // Do uncomment the first line of the file - 'use strict'. Why does the error happen?
// // В любом случае, значение obj.value не изменится из-за freeze. Но в use strict mode в консоль бросается exception,
// // а при выключенном режиме - интерпретатор JS молча игнорирует эту ошибку
//
// const someValue = 'new value';
// obj.someOtherValue.value = someValue;
//
// // Why do errors happen?
// // В первом случае из-за того, что свойства объекта obj заморожены
// // Во втором случае из-за того что заморозка "неглубокая" и не влияет на свойста значений-объектов
// // console.assert(obj.value === value, printMsg({errorMsg: 'value. Should not be equal.'}))
// // console.assert(obj.someOtherValue.value !== someValue, printMsg({errorMsg: 'someOtherValue. Should be equal.'}))


//=================== 3 ======================
const arrObj1 = [{ firstName: 'Test' }];
// инициализируем второй массив, содержимое - нулевой элемент первого массива
// Не могу разобраться. Перепробовал все способы инициализации массива, но все равно происходит копирование по ссылке
// let arrEl = [arrObj1[0]];
// Не понимаю, почему не работает такой способ. Он ведь должен клонировать объект, а не копировать по ссылке
const arrObj2 = Object.assign([], arrObj1);


arrObj2[0].firstName = 'Blabla';

console.log("arrObj2", arrObj2);
console.log("arrObj1", arrObj1);

//Почему ошибка и как пофиксить?
// Ошибка потому, что копирование происходит по ссылке. Массив это тоже объект
// console.assert(arrObj1[0].firstName === 'Test', printMsg({errorMsg: 'firstName. Should not be equal.'}))


//=================== 4 ======================
//
// let a1 = {
//     date: '2000',
// };
//
// let b1 = 'Hello world!';
//
// let c1 = ['Big', 'Small', 'Medium'];
//
// let a2 = a1;
// let b2 = b1;
// let c2 = c1;
//
//
// a2.date = '1999';
// b2 = 'Make peace! No War!';
// c2[2] = 'Nothing';
//
// // разобраться почему возникают ошибки
//
// // копирование по ссылке. переменные а1 и а2 ссылаются на один и тот же объект
// console.assert(a1.date === '2000', printMsg({errorMsg: 'Dates. Should not be equal.'}))
//
// // по той же причине. Это две ссылки на один и тот же объект, в данном случае сравнение == и === идентично и вернет true
// console.assert(a1 !== a2, printMsg({errorMsg: 'Objects. Should be equal.'}))
//
// // Примитивы копируются по значению, а не по ссылке. Поэтому переменные b1 и b2 - независимы друг от друг. При изменении значения у одной, значение другой не меняется
// console.assert(b1 !== 'Hello world!', printMsg({errorMsg: 'Hello world!. Should be equal.'}))
//
// // для массива, как для особого типа объекта, копирование также происходит по ссылке. Поэтому когда мы через переменную с2 меняем второй элемент массива,
// // то при вызове этого элемента через другую ссылочную переменную вы получаем то же значение. Ведь это тот же самый массив
// console.assert(c1[2] === 'Small', printMsg({errorMsg: 'Array object. Should not be equal.'}))



function printMsg() {
    // return  console.log('Error log %o', arguments[0])
    return `Error: ${arguments[0].obj || ''} ${arguments[0].errorMsg}`
}
