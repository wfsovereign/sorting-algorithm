export function heapSort(array) {

  const arrayLength = array.length;
  let end = arrayLength - 1;

  heapify(array, arrayLength);

  console.log('heapify array :', array);

  while (end > 0) {
    swap(array, end--, 0);
    siftDown(array, 0, end);
  }
  return array;
}

function heapify(array, length) {
  let middle = Math.floor(length / 2);

  while (middle >= 0) {
    siftDown(array, middle--, length - 1);
  }
}


function siftDown(array, start, end) {
  let root = start;
  let child = root * 2 + 1;
  let toSwap = root;
  console.log('child :', child);
  console.log('end :', end);

  while (child <= end) {
    console.log('to swap :', toSwap);
    if (array[toSwap] < array[child]) {
      swap(array, toSwap, child);
    }
    console.log('array :', array);

    if (child + 1 <= end && array[toSwap] < array[child + 1]) {
      swap(array, toSwap, child + 1);
    }

    console.log('array :', array);

    if (toSwap === root) {
      return;
    }

    console.log('!==');
    swap(array, root, toSwap);
    root = toSwap;
    console.log('-------');
    child = root * 2 + 1;
  }
}


function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
