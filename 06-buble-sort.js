function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= i + 1; j--) {
            if(arr[j] < arr[j-1]){
                const temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

const data = [
    [2, 1],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [8, 2, 3, 6, 2, 5, 9],
    [124, 32, 62, 7, 454, 235, 3]
]

for (const array of data) {
    const result = sort(array)
    console.log(result.join(', '))
}