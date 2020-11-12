function sort(data) {
    const array = [...data]

    for (let i = 1; i < array.length; i++) {
        const current = array[i]
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = current
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