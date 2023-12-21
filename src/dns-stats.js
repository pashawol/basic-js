const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map(el => el.split('.').reverse())
  let result = {}
  for (const subArr of arr) { 
    for (const [ index, item] of subArr.entries()) {
      let dns = "." + subArr.slice(0, index + 1).join('.');
      result[dns] = result[dns] + 1 ||  1 
    }
  }


  return result;
}
console.log(

  getDNSStats([
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
  ])
);
module.exports = {
  getDNSStats
};
