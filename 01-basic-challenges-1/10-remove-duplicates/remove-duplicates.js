// function removeDuplicates(arr) {
//   const removeDuplicates = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!removeDuplicates.includes(arr[i])) {
//       removeDuplicates.push(arr[i]);
//     }
//   }
//   return removeDuplicates;
// }

function removeDuplicates(arr) {
  return Array.from(Set(arr));
}

module.exports = removeDuplicates;
