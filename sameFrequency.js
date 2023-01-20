/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 *
 * Time: O(N)
 */

const sameFrequency = (num1, num2)=>{
    const freq1 = {}
    const freq2 = {}

    if(num1.toString().length !== num2.toString().length){
        return false
    }

    for(const num of num1.toString()){
        debugger
        freq1[num] ? freq1[num] += 1 : freq1[num] = 1
    }

    for(const num of num2.toString()){
        freq2[num] ? freq2[num] += 1 : freq2[num] = 1
    }

    for(const key in freq1){
        if(!freq2[key]){
            return false
        }
        if(freq2[key] !== freq1[key]){
            return false
        }
    }

    return true
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false