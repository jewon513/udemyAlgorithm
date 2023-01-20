/**
 * Multiple Pointers - averagePair
 * write a function called averagepair. given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the target average.
 * there may be more than one pair that matches the average target.
 *
 * Bonus Constraints:
 *
 * Time: O(N)
 *
 * Space: O(1)
 *
 * Sample Input:
 *
 * averagePair([1,2,3],2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19],8) // true
 * averagePair([-1,0,3,4,5,6], 4.1) // false
 * averagePair([],4) // false
 */

const averagePair = (arr, avg)=>{
    let first = 0
    let second = arr.length-1

    while (first < second){
        const firstVal = arr[first]
        const secondVal = arr[second]
        const average = (firstVal+secondVal)/2
        if(average === avg){
            return true
        }else if(average > avg){
            second--
        }else if(average < avg){
            first++
        }
    }

    return false
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1) )// false
console.log(averagePair([],4) )// false