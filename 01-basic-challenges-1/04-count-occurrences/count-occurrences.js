function countOccurrences(str, char) {
  let count = 0;
  for (let character of str) {
    if (character === char) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
