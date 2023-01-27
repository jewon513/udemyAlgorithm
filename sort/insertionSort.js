const insertionSort = (arr)=>{
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j = i-1
        for (j; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentValue
    }
    return arr
}

console.log(insertionSort([2,1,9,76,4]))