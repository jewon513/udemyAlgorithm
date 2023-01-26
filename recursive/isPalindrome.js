/**
 * isPalindrome
 * Write a recursive function called isPalindrome which returns true
 * if the string passed to it is a palindrome (reads the same forward and backward).
 * Otherwise it returns false.
 */

const isPalindrome = (string)=>{
    if(string.length === 1) return true
    const forward = string.charAt(0)
    const backward = string.charAt(string.length-1)
    if(forward === backward){
        return isPalindrome(string.substring(1,string.length-1))
    }
    return false
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false


console.log(isPalindrome('abcdefgfedcba')) // true