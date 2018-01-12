export function selectionSort(array) {

  const result = [];
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    let minNumberIndex = i;
    for (let j = i + 1; j < arrayLength; j++) {
      if (array[minNumberIndex] > array[j]) {
        minNumberIndex = j;
      }
    }
    if (minNumberIndex !== i) {
      let swap = array[minNumberIndex];
      array[minNumberIndex] = array[i];
      array[i] = swap;
    }

    result.push(array[i]);
  }

  return result;
}
