// src/sortingAlgorithms/selectionSort.js
function selectionSort(array) {
    const steps = [];
    for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
            steps.push({
                array: [...array],
                explanation: `Swapped ${array[i]} with ${array[minIdx]}`,
            });
        }
    }
    return steps;
}

export default selectionSort;
