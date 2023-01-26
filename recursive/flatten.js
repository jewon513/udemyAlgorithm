/**
 * flatten
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

const flatten = (arr)=>{
    const result = []
    const helper = (array)=>{
        for (const el of array) {
            if(Array.isArray(el)){
                helper(el)
            }else{
                result.push(el)
            }
        }
    }
    helper(arr)
    return result
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
