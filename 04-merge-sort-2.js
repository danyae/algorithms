// сортировка нормального человека

function merge(arr, first, middle, last) {
    // Представим себе 2 колоды карт
    const L = []
    const R = []

    // Первую половину карт накидаем в левую колоду,
    // а вторую - в правую
    for (let i = first; i <= middle; i++) {
        L.push(arr[i])
    }
    for (let i = middle + 1; i <= last; i++) {
        R.push(arr[i])
    }
    // Сигнальные карты дадут нам возможность выйти за границы массива
    // И всегда будут больше карты из другой колоды, с которой идет сравнение
    L.push(Number.MAX_SAFE_INTEGER)
    R.push(Number.MAX_SAFE_INTEGER)

    // Верхние карты, в левой и правой колоде
    let nextLeft = 0
    let nextRight = 0
    for (let i = first; i <= last; i++) {
        // Сравниваем верхнюю карту левой колоды с верхней картой правой
        if (L[nextLeft] <= R[nextRight]) {
            // Левая меньше, перекладываем ее в общую колоду
            arr[i] = L[nextLeft]
            nextLeft++
        }
        else {
            // Или правая меньше
            arr[i] = R[nextRight]
            nextRight++
        }
    }
}

function mergeSort(arr, first, last) {
    // Рекурсивно делим массив пополам, пока не останется 1 элемент
    // Далее собираем массив обратно функцией merge, устанавливая элементы в правильном порядке
    // На каждом этапе [first-middle] и (middle-last] будут упорядочены
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