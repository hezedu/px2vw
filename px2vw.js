var WIDTH = 320;
//,FIXED = 5;
const minVw = (1 / 320) * 100;
var REG = /([1-9]\d*\.\d*|0\.\d*[1-9]|\d)+px(?!(\s*\)))/gi; //去零正则表达式
// function trimEnd0(str) { //去掉未尾多余的0.
//   str = str.replace(/0+$/, '');
//   var lastIndex = str.length - 1;
//   return str[lastIndex] !== '.' ? str : str.substr(0, lastIndex);
// }

function matchCtrl(width) {
  return function(m) { //replace匹配字符串处理
    m = m.substr(0, m.length - 2);
    if(m[0] === '.'){
      m = Number('0' + m);
    }else{
      m = Number(m);
    }
    m = (m / width) * 100;
    if(m < minVw){
      m = minVw;
    }
    //m = m.toFixed(fixed);
    //return trimEnd0(m.toString()) + 'vw';
    return m + 'vw';
  }
}

function px2vw(width, str) {
  width = width || WIDTH;
  return str.replace(REG, matchCtrl(width));
}
module.exports = px2vw;
