/**
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 *
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 * Time Complexity - O(n)
 */

const findLongestSubstring = (string)=>{
    const obj = {}
    let start = 0
    let end = 0
    let maxLength = 0;
    while (start < string.length){
        if(!obj[string[end]] && end < string.length){
            obj[string[end]] = 1
            end ++
            maxLength = Math.max(maxLength, end-start)
        } else{
            delete obj[string[start]]
            start ++
        }
    }
    return maxLength
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6