/**
 * reverse
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

const reverse = (string)=>{
    // add whatever parameters you deem necessary - good luck!
    if(string.length === 1) return string
    return string[string.length-1] + reverse(string.substring(0,string.length-1))
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
