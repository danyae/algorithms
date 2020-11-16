function binarySearch(data, first, last, el) {
    if (first === last && data[first] != el) {
        return -1
    }

    const middle = Math.floor((first + last) / 2)
    const middleVal = data[middle]
    if (middleVal == el) {
        return middle
    }

    if (middleVal > el) {
        return binarySearch(data, first, middle - 1, el)
    }

    if (middleVal < el) {
        return binarySearch(data, middle + 1, last, el)
    }
}

function search(data, el) {
    return binarySearch(data, 0, data.length - 1, el)
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log(search(data, 2))
console.log(search(data, 7))
console.log(search(data, 5))
console.log(search(data, 9))
console.log(search(data, 1))
console.log(search(data, 0))
console.log(search(data, 15))