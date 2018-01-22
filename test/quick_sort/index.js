import 'should';
import { quickSort } from '../../src/quick_sort';


describe('quick sort test', () => {

  it('should return [1, 2, 3, 4, 6] when access [1, 3, 2, 4, 6]', () => {
    const result = quickSort([1, 3, 2, 4, 6], 0, 4);

    result.should.be.Array();
    result.should.deepEqual([1, 2, 3, 4, 6]);
  });

  it('should return [2, 3, 4, 5, 7, 9] when access [7, 5, 2, 4, 3, 9]', () => {
    const result = quickSort([7, 5, 2, 4, 3, 9], 0, 5);

    result.should.deepEqual([2, 3, 4, 5, 7, 9]);
  });

  it('should return [1, 2, 3, 4, 5, 6] when access [1, 2, 3, 4, 5, 6]', () => {
    const result = quickSort([1, 2, 3, 4, 5, 6], 0, 5);

    result.should.deepEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return [1, 3, 4, 5, 7, 9] when access [9, 7, 5, 4, 3, 1]', () => {
    const result = quickSort([9, 7, 5, 4, 3, 1], 0, 5);

    result.should.deepEqual([1, 3, 4, 5, 7, 9]);
  });
});
