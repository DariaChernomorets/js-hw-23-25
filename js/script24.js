'use strict';
//1
const arr = ['a', 'b', 'c', 'd'] ;
const arrParts = [arr.slice(0,2).join('+'),arr.slice(2,4).join('+')];
const finalString = arrParts.join(',');

console.log(finalString);

//2
const arr2 = [2, 5, 3, 9];
const multiply = (a,b) => {
    let multiplyResult = 0;
  return multiplyResult = a*b;
}
const sum = (a,b) => {
    let sumResult = 0;
    return sumResult = a+b;
}
const arrPart1 = arr2.slice(0,2).reduce(multiply);
const arrPart2 = arr2.slice(2,4).reduce(multiply);
const result = sum(arrPart1,arrPart2);
console.log(result)

//3
const arr3 =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
const arrNew = arr3.join(',').split(',');
console.log(arrNew[arrNew.indexOf('4',0)]);

//4
const obj =  {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
const arrFromObject = Object.values(obj.js);
console.log(arrFromObject[arrFromObject.indexOf('jQuery',0)]);

//5
const emptyArr = [];
const x = (arr,quantity) => {
    let str = 'x';
    for(let index = 0; index < quantity;index += 1 ) {
        arr.push(str.repeat(index + 1));
    }
    return arr;
}

console.log(x(emptyArr,18));

//6
const emptyArr1 = [];
const filling = (arr,quantity) => {
    let num = 0;
    for(let index = 0; index < quantity;index += 1 ) {
        num += 1;
        arr.push(num + String(num).repeat(index));
    }
    return arr;
}

console.log(filling(emptyArr1,9));

//7
const emptyArr2 = [];
const arrayFill = (value, quantity) => {
  for ( let i = 0; i < quantity; i += 1){
      emptyArr2.push(value);
  }
  return emptyArr2;
}
console.log(arrayFill('x',18));

//8
const arr4 = [-15, 2, -3, 4, 5, 6, 7, 8, 9];

const checkRule = (arr) => {
    let sum = 0;
    let i = 0;
    for (i = 0; i < arr.length; i +=1 ){
         sum += arr[i];
         if (sum > 10) break;
    }
    return i + 1;

}

console.log (checkRule(arr4));

//9
const arr5 = [-15, 2, -3, 4, 5, 6, 7, 8, 9];
const arrReverse = [];
const reverse = (arr) => {

    for ( let i = arr.length - 1; i >= 0; i --){
        arrReverse.push (arr[i]);
    }
  return arrReverse;
}

console.log(reverse(arr5));

//10
const arr6 = [[1, 2, 3], [4, 5], [6], [-14, -2, 0]];
const total = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1){
        for ( let j = 0; j < arr[i].length; j +=1){
            sum += arr[i][j];
        }
    }
    return sum;
}
console.log(total(arr6));

//11
const arr7 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const calc = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1){
        for ( let j = 0; j < arr[i].length; j +=1){
            for ( let k = 0; k < arr[j].length; k +=1) {
                sum += arr[i][j][k];
            }
        }
    }
    return sum;
}
console.log(calc(arr7));