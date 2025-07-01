const arrayIntersection = require('./array-intersection');

test('Finding array intersection', () => {
  expect(arrayIntersection([1, 2, 2, 3], [2, 2, 3, 4])).toEqual([2, 3]);
  expect(arrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
  expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  //Edge case
  expect(arrayIntersection([5, 6, 7], [1, 2, 3, 4, 5, 6, 7])).toEqual([
    5, 6, 7,
  ]);
});
