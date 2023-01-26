/**
 * someRecursive
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 */

const someRecursive = (array, callback)=>{
    if(array.length === 0) return false
    const pop = array.pop();
    if(callback(pop)){
        return true
    }else{
        return someRecursive(array, callback)
    }
}

function someRecursive2(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

let s2 = new Date(); // 시작
console.log(someRecursive2([1,2,3,4], isOdd))// true
console.log(someRecursive2([4,6,8,9], isOdd)) // true
console.log(someRecursive2([4,6,8], isOdd)) // false
console.log(someRecursive2([4,6,8], val => val > 10)) // false
let e2 = new Date(); // 종료
console.log(e2 -s2)

let s = new Date(); // 시작
console.log(someRecursive([1,2,3,4], isOdd))// true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false
let e = new Date(); // 종료
console.log(e -s)

