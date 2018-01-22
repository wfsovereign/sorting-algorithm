import 'should';
import { selectionSort } from '../../src/selection_sort';


describe('selection sort test', () => {

  it('should return [1, 2, 3, 4, 6] when access [1, 3, 2, 4, 6]', () => {
    const result = selectionSort([1, 3, 2, 4, 6]);

    result.should.be.Array();
    result.should.deepEqual([1, 2, 3, 4, 6]);
  });

  it('should return [2, 3, 4, 5, 7, 9] when access [7, 5, 2, 4, 3, 9]', () => {
    const result = selectionSort([7, 5, 2, 4, 3, 9]);

    result.should.deepEqual([2, 3, 4, 5, 7, 9]);
  });

  it('should return [1, 2, 3, 4, 5, 6] when access [1, 2, 3, 4, 5, 6]', () => {
    const result = selectionSort([1, 2, 3, 4, 5, 6]);

    result.should.deepEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return [1, 3, 4, 5, 7, 9] when access [9, 7, 5, 4, 3, 1]', () => {
    const result = selectionSort([9, 7, 5, 4, 3, 1]);

    result.should.deepEqual([1, 3, 4, 5, 7, 9]);
  });
});
