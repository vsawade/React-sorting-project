// src/sortingAlgorithms/bubbleSort.js
function bubbleSort(array) {
    const steps = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                steps.push({
                    array: [...array],
                    explanation: `Swapped ${array[j + 1]} and ${array[j]}`,
                });
            }
        }
    }
    return steps;
}

export default bubbleSort;
