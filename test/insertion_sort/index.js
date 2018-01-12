import 'should';
import { insertionSort } from '../../src/insertion_sort';


describe('insertion sort test', () => {

  it('should return [1, 2, 3, 4, 6] when access [1, 3, 2, 4, 6]', () => {
    const result = insertionSort([1, 3, 2, 4, 6]);

    result.should.be.Array();
    result.should.deepEqual([1, 2, 3, 4, 6]);
  });

  it('should return [2, 3, 4, 5, 7, 9] when access [7, 5, 2, 4, 3, 9]', () => {
    const result = insertionSort([7, 5, 2, 4, 3, 9]);

    result.should.deepEqual([2, 3, 4, 5, 7, 9]);
  });

  it('should return [1, 2, 3, 4, 5, 6] when access [1, 2, 3, 4, 5, 6]', () => {
    const result = insertionSort([1, 2, 3, 4, 5, 6]);

    result.should.deepEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return [9, 7, 5, 4, 3, 1] when access [1, 3, 4, 5, 7, 9]', () => {
    const result = insertionSort([9, 7, 5, 4, 3, 1]);

    result.should.deepEqual([1, 3, 4, 5, 7, 9]);
  });
});
