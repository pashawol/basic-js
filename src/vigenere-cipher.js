const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (type = true) {
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    return  this.type = type
  }
  encrypt(mess, key) {
    const alphabet = this.alphabet;
    if (!mess || !key) throw new Error ('Incorrect arguments!');

    let result = '';
    let x = 0;

    for (let i = 0; i < mess.length; i++) {
      const el = mess[i];
      if( x > (key.length - 1)) {x = 0};

      if(!alphabet.includes(el.toUpperCase())) {
        result += el
      }
      else{
        result += alphabet[(alphabet.indexOf(el.toUpperCase()) + alphabet.indexOf(key[x].toUpperCase())) % 26 ]
        x++
      }

    }
    return this.type ? result : result.split("").reverse().join('');
  }

  decrypt(mess, key) {
    const alphabet = this.alphabet;
    if (!mess || !key) {throw new Error ('Incorrect arguments!')};

    let result = '';
    let x = 0;

    for (let i = 0; i < mess.length; i++) {
      const el = mess[i];
      if( x > (key.length - 1)) {x = 0};
      
      if(!alphabet.includes(el.toUpperCase())) {
        result += el
      }
      else{
        if((alphabet.indexOf(el.toUpperCase()) - alphabet.indexOf(key[x].toUpperCase()) >= 0)) {
          result += alphabet[(alphabet.indexOf(el.toUpperCase()) - alphabet.indexOf(key[x].toUpperCase()))]
          x++
        }
        else{ 
          result += alphabet[alphabet.indexOf(el.toUpperCase()) - alphabet.indexOf(key[x].toUpperCase()) + 26]
          x++
        }
      }
    }
    return this.type ? result : result.split("").reverse().join(''); 
  }

}

module.exports = {
  VigenereCipheringMachine
};
