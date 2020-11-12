function sort(data) {
    const array = [...data]

    for (let i = 0; i < array.length - 1; i++) {
        let min, minIndex = 0
        const current = array[i]

        for (let j = i; j < array.length; j++) {
            if (j === i || array[j] < min) {
                min = array[j]
                minIndex = j
            }
        }

        array[i] = min
        array[minIndex] = current
    }

    return array
}

const data = [
    [8, 2, 3, 6, 2, 5, 9],
    [124, 32, 62, 7, 454, 235, 3]
]

for (const array of data) {
    const result = sort(array)
    console.log(result.join(', '))
}