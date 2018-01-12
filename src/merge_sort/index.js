
export function mergeSort(array) {
  const arrayLength = array.length;

  if (arrayLength < 2) {
    return array;
  }

  const middleIndex = Math.floor(arrayLength / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  const leftLength = left.length;
  const rightLength = right.length;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
