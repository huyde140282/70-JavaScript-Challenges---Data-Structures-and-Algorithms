// function arrayIntersection(arr1, arr2) {
//   const rmdArr = new Set(arr1);
//   const arrInter = new Set();
//   for (const e2 of arr2) {
//     if (rmdArr.has(e2)) arrInter.add(e2);
//   }
//   return Array.from(arrInter);
// }
// if array one length is greater than array two
function arrayIntersection(arr1, arr2) {
  const [smaller, larger] =
    arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];
  const rmdArr = new Set(smaller);
  const result = new Set();
  for (const e of larger) {
    if (rmdArr.has(e)) result.add(e);
  }
  return Array.from(result);
}

// function arrayIntersection(arr1, arr2) {
//   const arrInter = [];
//   for (const e1 of arr1) {
//     for (const e2 of arr2) {
//       if (e1 === e2) arrInter.push(e1);
//     }
//   }
//   return arrInter;
// }

module.exports = arrayIntersection;
