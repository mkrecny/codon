var components = ['A', 'T', 'G', 'C'];
var length = 3; // codon length

var getCombinations = require('./get_combinations.js');

module.exports = function(){
  return getCombinations(components, length)
}
