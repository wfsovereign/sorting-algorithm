

export function bubbleSort(array) {
    const result = [];
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (array[i] > array[j]) {
                let swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}