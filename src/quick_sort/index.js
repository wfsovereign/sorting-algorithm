
// lomuto partition scheme
export function quickSort(array, left, right) {
  if (left < right) {
    const partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }

  return array;
}

function partition(array, left, right) {
  const pivotValue = array[right];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  if (pivotValue < array[partitionIndex]) {
    swap(array, right, partitionIndex);
  }

  return partitionIndex;
}


function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
