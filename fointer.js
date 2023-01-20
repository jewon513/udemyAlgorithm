const countUniqueValues = (arr)=>{
    let first = 0
    let second = 1

    if(arr.length === 0){
        return 0;
    }

    while (second < arr.length){
        const firstVal = arr[first]
        const secondVal = arr[second]

        if(firstVal === secondVal){
            second++
        }else{
            first++
            arr[first] = secondVal
        }
    }

    return first+1
}

console.log(countUniqueValues([1,1,1,1,1,2]) )// 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) )// 7
console.log(countUniqueValues([]) )// 0
console.log(countUniqueValues([-2,-1,-1,0,1]) )// 4