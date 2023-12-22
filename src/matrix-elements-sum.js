const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
      const num = matrix[i][j]; 
      if((matrix[i - 1] && matrix[i - 1][j] != 0) ||  i == 0) {
        result += num;
      }
     
    }
  }
  return result;
}

let  matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
   ]
console.log(getMatrixElementsSum(matrix));

module.exports = {
  getMatrixElementsSum
};
