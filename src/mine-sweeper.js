const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = []

  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    result.push([])
    for (let j = 0; j < arr.length; j++) {
      result[i][j] = 0

      if(arr[j + 1] && arr[j + 1] === true) {
        result[i][j]++
      }
      if(arr[j - 1] &&  arr[j - 1] === true) {
        result[i][j]++
      } 
      if(matrix[i - 1] && matrix[i - 1][j]  && matrix[i - 1][j] === true) {
            result[i][j]++ 
        } 
        
      if(matrix[i +1] && matrix[i + 1][j]  && matrix[i + 1][j] === true) {
            result[i][j]++ 
        } 
        
      if(matrix[i + 1 ]  && matrix[i + 1][j + 1] && matrix[i + 1][j + 1] === true) {
            result[i][j]++
        } 
     
      if(matrix[i + 1 ] && matrix[i + 1][j - 1] && matrix[i + 1][j - 1] === true) {
            result[i][j]++
        } 
        
      if(matrix[i - 1 ] && matrix[i - 1][j + 1]  && matrix[i - 1][j + 1] === true) {
            result[i][j]++
        } 
     
      if(matrix[i - 1 ] && matrix[i - 1][j - 1] && matrix[i - 1][j - 1] === true) {
            result[i][j]++
        } 

     
    }
  }
  // console.log(result);
  
 return result
}

console.log(minesweeper(
  [
   [true, false, false],
   [false, true, false],
   [false, false, false]
  ]
));
module.exports = {
  minesweeper
};
