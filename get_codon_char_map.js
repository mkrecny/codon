var codons = require('./get_codons.js')();
var chars = require('./characters.js');
var map = {};
codons.forEach(function(c, i){
  map[c]=chars[i];
});

module.exports = function() {
  return map;
};
