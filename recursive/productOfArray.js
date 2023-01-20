/**
 * productOfArray
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

const productOfArray = (arr)=>{
    let result = 1
    const helper = ()=>{
        if(arr.length !== 0){
            result = result * arr.pop()
            helper()
        }
    }
    helper()
    return result
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60