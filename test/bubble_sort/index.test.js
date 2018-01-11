
import test from 'ava';
import { bubbleSort } from '../../src/bubble_sort';


test('should return [1, 2, 3, 4, 6] when access [1, 3, 2, 4, 6]', t => {
    const result = bubbleSort([1, 3, 2, 4, 6]);

    t.deepEqual(result, [1, 2, 3, 4, 6]);
});

test('should return [2, 3, 4, 5, 7, 9] when access [7, 5, 2, 4, 3, 9]', t => {
    const result = bubbleSort([7, 5, 2, 4, 3, 9]);

    t.deepEqual(result, [2, 3, 4, 5, 7, 9]);
});
