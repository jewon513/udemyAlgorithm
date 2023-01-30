const merge = (arr1, arr2)=>{
    let result = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

const mergeSort = (arr)=>{
    if(arr.length <= 1) return arr
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([1,5,2,10,14,12,30,21,16]))
