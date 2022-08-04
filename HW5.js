// ======================================= Task1 ==================================
// let a = prompt('Введите значение для массива');
// let b = +prompt('Введите длинну массива');
//
// function arrayFill (a, b) {
//     let arr1 = [];
//
//     for (let i=1; i<=b; i++) {
//         arr1.push(a);
//     }
//     return arr1
// }
// console.log(arrayFill(a,b));

// ======================================= Task2 ==================================

// let num = + prompt('Введите число:');
//
// function isNumberInRange (num) {
//     let t = true;
//     let f = false;
//         if (num >= 0 && num <= 10) {
//             return t
//             console.log(t);
//         } else {
//             return f
//             console.log(f);
//         }
// }
//
// console.log(isNumberInRange(num));

// ======================================= Task3 ==================================

// let x = +prompt('Введи число');
//
// function isEven (x) {
//     let t = true;
//     let f = false;
//         if (x % 2 == 0) {
//             return t;
//             console.log(t);
//             } else {
//                 return f;
//                 console.log(f);
//             }
// }
// console.log(isEven(x));

// ======================================= Task4 ==================================

// let arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function isEven (nums) {
//
//         if (nums % 2 == 0) {
//             return true;
//             } else {
//                 return false;
//             }
// }
// let arr2 = [];
//         for (let i = 0; i <= arrOfNums.length; i++) {
//             if (isEven(arrOfNums[i])) {
//                 arr2.push(arrOfNums[i]);
//             }
// }
// console.log(arr2);

// ======================================= Task5 ==================================

// let x = + prompt('Введите число аргумента');
// let n = Math.abs (+ prompt('Введите число степеня'));
//
// function stepen (x, n) {
//        let res = x**n;
//        return res;
// }
//
// console.log(stepen(x, n));

// ======================================= Task6 ==================================

// let age = + prompt('Введите свой возраст')
//
//     function checkAge(age) {
//     if (age >= 16) {
//         alert('Добро пожаловать!');
//     } else {
//         alert('Вы еще молоды!');
//     }
//     }
// checkAge(age);

// ======================================= Task7 ==================================
//    ?????????????????????
let age = + prompt('Введите свой возраст')

function checkAge(age) {
    if (age == undefined || age == NaN || age == 0){
        alert('Введите возраст')
    } else  if (age >= 16) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы еще молоды!');
    }
}
checkAge(age);