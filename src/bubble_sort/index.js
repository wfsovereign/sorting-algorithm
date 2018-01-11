
// iteration times is array length + sum(0, array length), which is (array length * (array length + 1)) / 2.

export function bubbleSort(array) {
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

  // for (let i = arrayLength - 1; i >= 0; i--) {
  //   for (let j = 1; j <= i; j++) {
  //     if (array[j - 1] > array[j]) {
  //       let swap = array[j - 1];
  //       array[j - 1] = array[j];
  //       array[j] = swap;
  //     }
  //   }
  // }
  //
  return array;
}
