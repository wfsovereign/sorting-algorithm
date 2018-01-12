
// from last element, compare it and previous element, select correct position, insert it.


export function insertionSort(array) {

  const arrayLength = array.length;

  for (let i = 1; i < arrayLength; i++) {
    const element = array[i];
    let j = i;

    while (j > 0 && array[j - 1] > element) {
      array[j] = array[j - 1];
      j--;
    }

    array[j] = element;
  }

  return array;
}
