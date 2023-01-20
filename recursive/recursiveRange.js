/**
 * recursiveRange
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */

const recursiveRange = (number)=>{
    let result = 0
    const helper = (num)=>{
        if(num !== 0){
            result = result + num
            num--
            helper(num)
        }
    }
    helper(number)
    return result
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55