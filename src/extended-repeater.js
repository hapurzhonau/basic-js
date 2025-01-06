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
function repeater(str, options) {
  let additionParts = [];
  let resultParts = [];

  for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {
    if (options.addition !== undefined) {
      let addition = String(options.addition);
      additionParts.push(addition);
    }
  }

  let additionString = additionParts.join(options.additionSeparator || '|');

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    resultParts.push(str + additionString);
  }

  return resultParts.join(options.separator || '+');
}

module.exports = {
  repeater
};
