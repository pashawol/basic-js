const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  const {repeatTimes = 1,  separator = "+", addition = '', additionRepeatTimes = 1, additionSeparator = "|"} = options;

  let resultAdd = addition
  for (let i = 0; i < additionRepeatTimes - 1; i++) {
    resultAdd += additionSeparator +  addition;
  }
  resultAdd =  str + resultAdd;
  let result = resultAdd;
  for (let i = 0; i < repeatTimes - 1; i++) {
    result += separator +  resultAdd;
  }
  return result;
}
console.log(repeater('STRING', { repeatTimes: 3, separator: '**',  addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
module.exports = {
  repeater
};
