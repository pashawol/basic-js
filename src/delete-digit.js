const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split("");
  let number = 0;
  for (const num of arr) {
      let newNumber = +n.toString().replace(num,'');
      if(newNumber > number) number = newNumber;
  }
  return number;
}


console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};
