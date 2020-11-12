// сортировка нормального человека

function merge(arr, first, middle, last) {
    const L = []
    const R = []

    for (let i = first; i <= middle; i++) {
        L.push(arr[i])
    }
    for (let i = middle + 1; i <= last; i++) {
        R.push(arr[i])
    }
    L.push(Number.MAX_SAFE_INTEGER)
    R.push(Number.MAX_SAFE_INTEGER)

    let nextLeft = 0
    let nextRight = 0
    for (let i = first; i <= last; i++) {
        if (L[nextLeft] <= R[nextRight]) {
            arr[i] = L[nextLeft]
            nextLeft++
        }
        else {
            arr[i] = R[nextRight]
            nextRight++
        }
    }
}

function fillTheRest(dest, destStartIndex, destLastIndex, source, sourceCurrentIndex){
    for(let i = destStartIndex; i <= destLastIndex; i++){
        dest[i] = source[sourceCurrentIndex]
        sourceCurrentIndex++
    }
}

function mergeSort(arr, first, last) {
    if (first < last) {
        const middle = Math.floor((first + last) / 2)
        mergeSort(arr, first, middle)
        mergeSort(arr, middle + 1, last)
        merge(arr, first, middle, last)
    }
}

function sort(arr) {
    mergeSort(arr, 0, arr.length-1)
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