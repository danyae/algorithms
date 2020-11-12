// сортировка курильщика

function merge(arr, p, q, r) {
    const n1 = q - p + 1;
    const n2 = r - q;
    const L = []
    const R = []

    for (let i = 0; i < n1; i++) {
        L.push(arr[p + i])
    }
    for (let i = 0; i < n2; i++) {
        R.push(arr[q + i + 1])
    }
    L.push(Number.MAX_SAFE_INTEGER)
    R.push(Number.MAX_SAFE_INTEGER)

    let currentLeft = 0;
    let currentRight = 0
    for (let k = p; k <= r; k++) {
        if (L[currentLeft] <= R[currentRight]) {
            arr[k] = L[currentLeft]
            currentLeft++
        }
        else {
            arr[k] = R[currentRight]
            currentRight++
        }
    }
}

function mergeSort(arr, p, r) {
    if (p < r) {
        const q = Math.floor((p + r) / 2)
        mergeSort(arr, p, q)
        mergeSort(arr, q + 1, r)
        merge(arr, p, q, r)
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