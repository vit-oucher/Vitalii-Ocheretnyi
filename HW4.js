// ======================================= Task1 ==============================
// let array1 = ['a', 'b', 'c'];
// let array2 = [1, 2, 3];
//
// console.log(array1);
// console.log(array2);
// const result1 = [array1, array2];
// const result2 = array1.concat(array2);
// const result3 = [].concat(array1, array2);
//
// console.log(result1);
// console.log(result2);
// console.log(result3);

// ======================================= Task2 ==================================

// let array1 = ['a', 'b', 'c'];
// console.log(array1);
//
// const result1 = array1.push(1, 2, 3);
//
// console.log(array1);
// console.log(result1);

// const result2 = array1.splice(1, 2, 3);
// console.log(result2);
// console.log(array1);

// const result3 = array1.splice(3, 0, 1, 2, 3);
// console.log(result3);
// console.log(array1);

// ======================================= Task3 ==================================

// let arrNum = [1, 2, 3, 4, 5];
// const result1 = arrNum.splice(1,2);
// console.log(arrNum);
// console.log(result1);

// ======================================= Task4 ==================================

// let arrNum = [1, 2, 3, 4, 5];
// const res1 = arrNum.splice(2,0, 'a', 'b', 'c');
// console.log(arrNum);
// console.log(res1);

// ======================================= Task5 ==================================

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [];
//
// for (let i=1; i < arr.length+1; i++) {
//     let i2 = i*10;
//     arr1.push(i2);
// };
// console.log(arr1);

// // for (let elem of arr) {
// //    arr1.push(elem2 = elem * 10);
// // }
// // console.log(arr1);

// ======================================= Task6 ==================================
//
// let i = 4;
//
// for (; i<=400; i++) {
//     console.log(i);
// };

// ======================================= Task7 ==================================
//
// let i = 4;
// for (; i < 14; i+=3) {
//     console.log(i);
// };

// ======================================= Task8 ==================================
//
// let i = 654;
// for (; i >=0; i--) {
//     console.log(i);
// };

// ======================================= Task9 ==================================
//
// let i = 1983;
// for (; i <= 2017; i++) {
//     console.log(i);
// };

// ======================================= Task10 ==================================
//
// let i = -4;
// for (; i <= 100; i+=2) {
//     console.log(i);
// };

// ======================================= Task11 ==================================

// let sum = 0;
// for (i=0; i<=100; i++) {
//     sum += i;
// }
// console.log(sum);

// ======================================= Task12 ==================================
//
// let arr = [];
// let str = '';
// let lenghtOfArr = + prompt('Введите длину массива', []);
// for (i=1; i<=lenghtOfArr; i++) {
//     str += 'x';
//     arr.push(str);
// }
// console.log(arr);

// ======================================= Task13 ==================================

// let arr = [];
// let str = '';
// let lenghtOfArr = + prompt('Введите длину массива', []);
// for (i=1; i<=lenghtOfArr; i++) {
//     str = '';
//     for (j=1; j<=i; j++) {
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);

// ======================================= Task14 ==================================

// let arr1 = [];
// for (let i=0; i<10; i++) {
//     let arr2 = [];
//     for (j=0; j<10; j++) {
//         arr2.push(0);
//         if (i === 0) {
//             arr2[j] = 'x';
//         }
//         else if (i === 9) {
//             arr2[j] = 'x';
//         }
//     }
//     arr2[0] = 'x';
//     arr2[9] = 'x';
//     arr1.push(arr2);
// }
// console.log(arr1);

// ======================================= Task15 ==================================
//
// let arr1 = [];
// for (i=1; i<=10; i++) {
//     let arr2 = [];
//     for (j=1; j<=10; j++) {
//
//         arr2.push(j*i);
//     }
//     arr1.push(arr2);
// }
// console.log(arr1);

// ======================================= Task16 ==================================

let amountOfItems = + prompt("Введите количество:", []);
let lastDidg = amountOfItems % 10;
if (amountOfItems >= 10 && amountOfItems <=20 ) {
    alert('В корзине ' + amountOfItems + ' товаров');
}
else
switch (lastDidg) {
    case 1: alert('В корзине ' + amountOfItems + ' товар');
    break;
    case 2:
    case 3:
    case 4: alert('В корзине ' + amountOfItems + ' товара');
    break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9: alert('В корзине ' + amountOfItems + ' товаров');
    break;
}