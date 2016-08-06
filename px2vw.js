var fs = require('fs');
var src = fs.readFileSync('./pack.css').toString();

var count = 0;
var newStr = src.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d|\d)+px/gi, function(matchStr){
  count ++;
  console.log('matchStr', matchStr);
  var num = matchStr.split('px')[0];
  num = Number(num);
  if(num > 1){
    return ((num/320)*100) + 'vw';
  }
  return matchStr;
});

fs.writeFileSync('./pack_vw.css', newStr);
console.log('count', count);