// Задание от Алексея Тихонова

// исходные данные даны три объекта, нужно их !!программно!! видоизменить
// Использовать для этого данные из других объектов, примеры того что должно получиться ниже в результатах
// По сути операции с объектами, различные модификации
// Допускаются любые модификаций, любое кол-во методов
// Главное ограничение - объекты не переопределяются, не создаются новые объекты, а только модифицируются существующие.

const headPerson = {
    firstName: 'Dic', age: 50, eyeColor: 'blue',
    family: [
        {firstName: 'Mike', age: 30, eyeColor: 'brown'},
        {firstName: 'Kate', age: 40, eyeColor: 'blue',},
        {firstName: 'Mary', age: 20, eyeColor: 'green',}
    ]
};

let family = []

const eyeColors = ['blue', 'brown', 'green'];

const headPersonBackup = {};


// Результаты того как должны выглядеть объекты после манипуляций
// Основная работа, это либо добавить новые свойства, либо удалить/модифицировать старые
// в данном примере посчитать два новый свойства. размер семейства, и суммарный возраст всей семьи, и избавиться от family
/*
 // копия оригинального объекта headPerson
    const headPersonBackup = {
      firstName: 'Dic', age: 50, eyeColor: 'blue',
      family: [
        {firstName: 'Mike', age: 30, eyeColor: 'brown'},
        {firstName: 'Kate', age: 40, eyeColor: 'blue',},
        {firstName: 'Mary', age: 20, eyeColor: 'green',}
      ]
    };
    const headPerson = {
      firstName: 'Dic', age: 50, eyeColor: 'blue', familySize: 4, totalFamilyAge: 140
    };
    // отсортировать массив с объектами по возрасту
    const family = [
      {firstName: 'Dic', age: 50, eyeColor: 'blue'},
      {firstName: 'Mike', age: 30, eyeColor: 'brown'},
      {firstName: 'Kate', age: 40, eyeColor: 'blue',},
      {firstName: 'Mary', age: 20, eyeColor: 'green',}
      ]
// console.assert(family.length === 4, printMsg({obj: family.length, errorMsg: 'Check family size'}))
// console.assert(Object.keys(headPerson).length === 5, printMsg({
//     headAttributes: Object.keys(headPerson).length,
//     errorMsg: 'Do the checking of head person\'s attributes'
// }));
// console.assert(headPerson.firstName === 'Dic', printMsg({obj: headPerson.firstName, errorMsg: 'Check head\'s name'}))
// console.assert(headPerson.age === 50, printMsg({obj: headPerson.age, errorMsg: 'Check head\'s age'}))
// console.assert(headPerson.eyeColor === 'blue', printMsg({obj: headPerson.age, errorMsg: 'Check head\'s eye color'}))
// console.assert(headPerson.familySize === 4, printMsg({obj: headPerson.age, errorMsg: 'Check head\'s family size'}))
// console.assert(headPerson.totalFamilyAge === 140, printMsg({obj: headPerson.age, errorMsg: 'Check head\'s family total age'}))
// console.assert(checkEyes(eyeColors), printMsg({obj: eyeColors, errorMsg: 'Check eye colors list types'}))
//
// function checkEyes(colors = []) {
//     let result = true;
//
//     colors.forEach(color => {
//         if (typeof color === 'string') {
//             result = false;
//         }
//         if (!color.hasOwnProperty('eyeColor')) {
//             result = false;
//         }
//     })
//
//     return result;
// }
//
// function printMsg() {
//     // return  console.log('Error log %o', arguments[0])
//     return `Error log', ${arguments[0].obj}, ${arguments[0].errorMsg}`
// }
    ]
    //
    const eyeColors = [{eyeColor: 'blue'}, {eyeColor: 'brown'}, {eyeColor: 'green'}]
*/

// ----------------------------------------- execution-----------------------------------

// Making backup object. Clone of the original object

for (let key in headPerson) {
    headPersonBackup[key] = headPerson[key];
}

// Copy the data from headPerson`s prop to the array "family"

for (let i = 0; i < headPerson.family.length; i++) {
    family[i] = headPerson.family[i];
}



// Add elem to the array 'family'

family.push({firstName: 'Dic', age: 50, eyeColor: 'blue'});
// console.log(family[0].age);

// Remove prop 'family' from headPerson

delete headPerson.family;

// Add new props into object

headPerson.familySize = family.length;

function sumFamilyAge(arr) {
    let sumAge = 0;

    for (let i = 0; i < arr.length; i++) {
        sumAge += arr[i].age;
    }
    return sumAge;
}


headPerson.totalFamilyAge = sumFamilyAge(family);


// headPerson.totalFamilyAge = 140;

// Sorting the array of the objects

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? -1 : 1);
}

sortByAge(family);

// Changing the array to array of the objects

// IT IS NOW:         const eyeColors = ['blue', 'brown', 'eyeColor'];
// IT SHOULD BE DONE: const eyeColors = [{eyeColor: 'blue'}, {eyeColor: 'brown'}, {eyeColor: 'green'}]

// for (let i = 0; i < eyeColors.length; i++) {
//     eyeColors[i] = {eyeColor: eyeColors[i]};
// }

eyeColors.forEach(function(item, i, arr) {
    arr[i] = {eyeColor: item};
});

/// Немного тестов, если упали то будет соответствующий лог
console.assert(family.length === 4, printMsg({obj: family.length, errorMsg: 'Check family size'}))
console.assert(Object.keys(headPerson).length === 5, printMsg({
    headAttributes: Object.keys(headPerson).length,
    errorMsg: 'Do the checking of head person\'s attributes'
}));
console.assert(headPerson.firstName === 'Dic', printMsg({obj: headPerson.firstName, errorMsg: 'Check head\'s name'}))
console.assert(headPerson.age === 50, printMsg({obj: headPerson.age, errorMsg: 'Check head\'s age'}))
console.assert(headPerson.eyeColor === 'blue', printMsg({obj: headPerson.age, errorMsg: 'Check head\'s eye color'}))
console.assert(headPerson.familySize === 4, printMsg({obj: headPerson.age, errorMsg: 'Check head\'s family size'}))
console.assert(headPerson.totalFamilyAge === 140, printMsg({obj: headPerson.age, errorMsg: 'Check head\'s family total age'}))
console.assert(checkEyes(eyeColors), printMsg({obj: eyeColors, errorMsg: 'Check eye colors list types'}))

function checkEyes(colors = []) {
    let result = true;

    colors.forEach(color => {
        if (typeof color === 'string') {
            result = false;
        }
        if (!color.hasOwnProperty('eyeColor')) {
            result = false;
        }
    })

    return result;
}

function printMsg() {
    // return  console.log('Error log %o', arguments[0])
    return `Error log', ${arguments[0].obj}, ${arguments[0].errorMsg}`
}