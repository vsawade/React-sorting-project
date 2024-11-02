// src/sortingAlgorithms/insertionSort.js
function insertionSort(array) {
    const steps = [];
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            steps.push({
                array: [...array],
                explanation: `Moved ${array[j]} to position ${j + 1}`,
            });
            j = j - 1;
        }
        array[j + 1] = key;
        steps.push({
            array: [...array],
            explanation: `Inserted ${key} at position ${j + 1}`,
        });
    }
    return steps;
}

export default insertionSort;
