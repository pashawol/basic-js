const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  const option = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ]
  if( (!Array.isArray(arr))) throw new Error("'arr' parameter must be an instance of the Array!")
  if(!arr.length) return [];
  let result =  [];
  let copy =  [];
  arr.forEach(el => copy.push(el))
  for (let i = 0; i < copy.length; i++) {
    const ell = copy[i]; 
    if(option.includes(ell)) {
      
      if(ell === option[0] && i < copy.length - 1) {
        copy[i + 1] = ''
        copy[i] = ''
        result.push(copy[i])
        console.log(ell);
      }

      if(ell === option[1] && i > 0 ) {
        result[i - 1] = ''
        
        copy[i - 1] = ''
        copy[i] = ''
        
        result.push(copy[i])
        console.log(ell);
      }
      
      if(ell === option[2]  && i < copy.length - 1) {
          copy[i] = copy[i + 1]
          result.push(copy[i])
        }
        if(ell === option[3]  && i > 0) {
          copy[i] = copy[i - 1]
          result.push(copy[i])
        }
      }
      
    else{
      result.push(copy[i])
    }
  }

  return result.filter(el => el !== "")

}

module.exports = {
  transform
};
