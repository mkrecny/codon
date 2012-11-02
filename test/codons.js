var getCodons = require('../get_codons.js');
var codons = getCodons();
console.log(codons, codons.length);
if (codons.length===64){
  console.log('**test passed**')
}
process.exit()
