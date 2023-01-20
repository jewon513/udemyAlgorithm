const validAnagram = (str1, str2)=>{
    const cnt1 = {}
    const cnt2 = {}

    for(const char of str1){
        cnt1[char] ? cnt1[char] += 1 : cnt1[char] = 1
    }
    for(const char of str2){
        cnt2[char] ? cnt2[char] += 1 : cnt2[char] = 1
    }

    for(const key in cnt1){
        if(!cnt2[key]){
            return false;
        }
        if(cnt1[key] !== cnt2[key]){
            return false;
        }
    }

    return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza') )// false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car"))// false
console.log(validAnagram('awesome', 'awesom') )// false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') )// false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
