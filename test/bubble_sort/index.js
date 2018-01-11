import { bubbleSort } from '../../src/bubble_sort';
import 'should';

describe('bubble sort test', () => {

  it('should return [1, 2, 3, 4, 6] when access [1, 3, 2, 4, 6]', () => {
    const result = bubbleSort([1, 3, 2, 4, 6]);

    result.should.be.Array();
    result.should.deepEqual([1, 2, 3, 4, 6]);
  });

  it('should return [2, 3, 4, 5, 7, 9] when access [7, 5, 2, 4, 3, 9]', () => {
    const result = bubbleSort([7, 5, 2, 4, 3, 9]);

    result.should.deepEqual([2, 3, 4, 5, 7, 9]);
  });
});
