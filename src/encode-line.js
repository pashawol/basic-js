const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
  let arr = str.split("");
  let result = '';
  
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if( str !== arr[i - 1]) {
      let index = 0;
      for (let j = i + 1; j < arr.length; j++) {
        if(str === arr[j]) {
          index++
        }
        else{
          break
        }
      }    
      result += (index > 0 ? index + 1  : '') + str;
    }
  }
  
  return result;
}

console.log(encodeLine('aabbbc') );
console.log(encodeLine('abbcca'));
module.exports = {
  encodeLine
};
