// Optimized method, it can reduce circulate times
export function heapSort(array) {
  const arrayLength = array.length;
  let end = arrayLength - 1;

  heapify(array, arrayLength);

  // move the max value to the end, and go on execute siftDown method from 0 to end - 1
  while (end > 0) {
    swap(array, end--, 0);
    siftDown(array, 0, end);
  }

  return array;
}

// build max heap
function heapify(array, length) {
  let middle = Math.floor((length - 2) / 2);

  while (middle >= 0) {
    siftDown(array, middle--, length - 1);
  }
}

// find the max value of array index from start to end and move it to the first index.
function siftDown(array, start, end) {
  let root = start;
  let child = root * 2 + 1;
  let toSwap = root;

  while (child <= end) {
    if (array[toSwap] < array[child]) {
      toSwap = child;
    }

    const rightIndex = child + 1;

    if (rightIndex <= end && array[toSwap] < array[rightIndex]) {
      toSwap = rightIndex;
    }

    swap(array, root, toSwap);

    if (toSwap === root) {
      break;
    }

    root = toSwap;
    child = root * 2 + 1;
  }
}

// standard max heapify method in heapSort2, through compare left child and right child
export function heapSort2(array) {
  const arrayLength = array.length;
  buildMaxHeap(array, arrayLength);

  for (let i = arrayLength - 1; i > 0; i--) {
    swap(array, 0, i);
    maxHeapify(array, 0, i);
  }

  return array;
}

function maxHeapify(array, index, heapSize) {
  let maxIndex;
  let leftIndex;
  let rightIndex;

  while (true) {
    count++;
    maxIndex = index;
    leftIndex = 2 * index + 1;
    rightIndex = 2 * (index + 1);
    if (leftIndex < heapSize && array[index] < array[leftIndex]) {
      maxIndex = leftIndex;
    }

    if (rightIndex < heapSize && array[maxIndex] < array[rightIndex]) {
      maxIndex = rightIndex;
    }

    if (maxIndex !== index) {
      swap(array, maxIndex, index);
      index = maxIndex;
    } else {
      break;
    }
  }
}

function buildMaxHeap(array, heapSize) {
  let parentIndex = Math.floor((heapSize - 1) / 2);

  while (parentIndex >= 0) {
    maxHeapify(array, parentIndex--, heapSize);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
