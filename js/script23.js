'use strict';
//1
const arr1 =  [1, 2, 3] ;
const arr2 =  [4, 5, 6] ;
const arrAdd = arr1.concat(arr2);
console.log(arrAdd);

//2
const arr3 = [1, 2, 3];
const arrReverse = arr3.reverse();
console.log(arrReverse);

//3
const arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(arr4);

//4
const arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
console.log(arr5);

//5
const arrString1 =  ['js', 'css', 'jq'];
console.log(arrString1[0]);

//6
console.log(arrString1[arrString1.length - 1]);

//7
const arr6 = [1, 2, 3, 4, 5];
const arrPart = arr6.slice(0, 3);
console.log(arrPart);

//8
const arrPartEnd = arr6.slice(3, arr6.length);
console.log(arrPartEnd);

//9
arr6.splice(1, 2);
console.log(arr6);

//10
const arr7 = [1, 2, 3, 4, 5];
const arrCutted = arr7.splice(1, 3);
console.log(arrCutted);

//11
const arr8 = [1, 2, 3, 4, 5];
arr8.splice(2, 0,  'a', 'b', 'c');
console.log(arr8);

//12
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 0,  'a', 'b');
arr9.splice(6, 0,  'c');
arr9.splice(arr9.length, 0,  'e');
console.log(arr9);

//13
const arr10 = [3, 4, 1, 2, 7];
const sorting = function (a, b){
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}
arr10.sort(sorting);
console.log(arr10);

//14
const arr11= [5, 6, 7, 8, 9];
const sum = arr11.reduce(function (sumResult, element){
          return sumResult + element;
});
console.log(sum);

//15
const arr12 = [5, 6, 7, 8, 9];
const pow = function (a){
    return a**2;
}
const exponentiationArr = arr12.map(pow);
console.log(exponentiationArr)

//16
const arr13 = [1,-3, 5, 6,-7, 8, 9,-11];

const positive = function (a){
    return  a >= 0;
}
const filtered = arr13.filter(positive);
console.log(filtered);

//17
const odd = function (a){
    return  a % 2 === 0;
}
const filteredOdd = arr13.filter(odd);
console.log(filteredOdd);

//18
const arrString2 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

const longEnough = function (a){
    return  a.length > 5;
}
const filteredString = arrString2.filter(longEnough);
console.log(filteredString);

//19
const array =  [1, 2, [3, 4], 5, [6, 7]];
const arrayCheck = function (a){
    return  Array.isArray(a);
}
const subArrays = array.filter(arrayCheck);
console.log(subArrays);

//20
const arr14 = [5,-3, 6,-5, 0,-7, 8, 9];

const negative = function (a){
    return  a < 0;
}
const filteredNegative = arr14.filter(negative);
console.log(filteredNegative.length);
