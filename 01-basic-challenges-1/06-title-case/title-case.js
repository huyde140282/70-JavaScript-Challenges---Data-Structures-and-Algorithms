// function titleCase(str) {
//   let newStr = str.toLowerCase().split(' ');
//   let result = '';
//   for (let char of newStr) {
//     let newChar = char.toLowerCase();
//     //Uppcase the fist letter + the rest of the word
//     let titleCase = newChar.charAt(0).toUpperCase() + newChar.slice(1);
//     result += titleCase + ' ';
//   }
//   return result.trim();
// }

function titleCase(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map(char => char.charAt(0).toUpperCase() + char.slice(1))
    .join(' ');
}

module.exports = titleCase;
