var _COMPONENTS , _LEN;
//--programmatically generated programming language
//--inspired by DNA
//

function recurseWriteSymbols(sofar, i, symbols){
  if (sofar.length===_LEN){
    return symbols.push(sofar);
  }
  _COMPONENTS.forEach(function(c, i){
    recurseWriteSymbols(sofar+_COMPONENTS[i], i, symbols);
  });
}

module.exports = function(components, len){
  _COMPONENTS = components
  , _LEN = len
  , symbols = [];

  _COMPONENTS.forEach(function(c, i){
      recurseWriteSymbols(c, i, symbols);
  });

  return symbols;
};
