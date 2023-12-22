const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = ['winter', 'spring','summer', 'autumn']
  if(!date) {
    return 'Unable to determine the time of year!'
  }
  else if(!Date.parse(date) || !(date instanceof Date) || Object.getOwnPropertyNames(date).length ) {  
    throw Error('Invalid date!')
  }
  
  
  let month = date.getMonth();
  switch(month) {
    case 11:
    case 0:
    case 1:
    return season[0];
    
    case 2:
    case 3:
    case 4:
    return season[1];
    
    case 5:
    case 6:
    case 7:
    return season[2];
    
    case 8:
    case 9:
    case 10:
    return season[3];
  }
}
console.log(getSeason(new Date(2020, 02, 31)));
module.exports = {
  getSeason
};
