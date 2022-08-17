'use strict'

const array = [1, -2, 15, -7, 6,-2];

const indexOf = (searchEl,start = 0,arr) => {
    for (let i = start;i < arr.length; i +=1 ){
        if(arr[i] === searchEl) {
            return i;
        }
    }
        return -1;

}
console.log(indexOf(6, 0,array ));


const lastIndexOf = (searchEl,start,arr) => {
    for (let i = start;i >= 0; i -- ){
        if(arr[i] === searchEl) {
            return i;
        }
    }
    return -1;

}

console.log(lastIndexOf(-2, 3,array ));

const find = (searchEl,arr) => {
    for (let i = 0;i < arr.length; i +=1){
        if(arr[i] === searchEl) {
            return arr[i];
        }
    }
    return undefined;

}

console.log(find(3, array ));

const findIndex = (searchEl,arr) => {
    for (let i = 0;i < arr.length; i +=1){
        if(arr[i] === searchEl) {
            return i;
        }
    }
    return -1;

}

console.log(findIndex(-2, array ));

const includes = (searchEl,start,arr) => {
    for (let i = start;i < arr.length; i +=1){
        if(arr[i] === searchEl) {
            return true;
        }
    }
    return false;

}

console.log(includes(3,0, array ));

const condition = (item) => {
  return item < 20;
}

const every = (callback,arr) => {
    for (let i = 0;i < arr.length; i +=1){
        if(!callback(arr[i],i, arr)) {
            return false;
        }
    }
    return true;

}
console.log(every(condition,array));

const condition1 = (item) => {
    return typeof (item) === 'string';
}

const some = (callback,arr) => {
    for (let i = 0;i < arr.length; i +=1){
        if(callback(arr[i],i, arr)) {
            return true;
        }
    }
    return false;

}
console.log(some(condition1,array));
