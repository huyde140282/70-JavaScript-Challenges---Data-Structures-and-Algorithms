// function fizzBuzzArray(num) {
//   if (num <= 0) throw Error('Invalid number!');
//   const fbArr = [];
//   for (let index = 1; index <= num; index++) {
//     if (index % 15 === 0) fbArr[index] = 'FizzBuzz';
//     else if (index % 3 === 0) fbArr[index] = 'Fizz';
//     else if (index % 5 === 0) fbArr[index] = 'Buzz';
//     else fbArr[index] = index;
//   }
//   return fbArr;
// }
function fizzBuzzArray(num) {
  if (num <= 0) throw Error('Invalid number!');
  const fbArr = [];
  for (let i = 1; i <= num; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    fbArr.push(output || i);
  }
  return fbArr;
}

module.exports = fizzBuzzArray;
