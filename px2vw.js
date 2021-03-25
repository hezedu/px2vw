/*!
 * version 1.3.2
 * MIT License
 * https://github.com/hezedu/px2vw
 */
var WIDTH = 320;

var REG = /([1-9]\d*\.\d*|0\.\d*[1-9]|\d)+px(?!(\s*\)))/gi; //去零正则表达式

function trimEnd0(str) { //去掉未尾多余的0.
  str = str.replace(/0+$/, '');
  var lastIndex = str.length - 1;
  return str[lastIndex] !== '.' ? str : str.substr(0, lastIndex);
}

function notFixedOut(num){
  return num + 'vw';
}
function fixedOut(num, fixedNum){
  return trimEnd0(num.toFixed(fixedNum)) + 'vw';
}

function matchCtrl(width, minVw, fixedNum) {
  var out = fixedNum ? fixedOut : notFixedOut;
  var minVwOut = out(minVw, fixedNum);
  return function(m) { //replace匹配字符串处理
    m = m.substr(0, m.length - 2);
    if(m[0] === '.'){
      m = Number('0' + m);
    }else{
      m = Number(m);
    }
    m = (m / width) * 100;
    if(m < minVw){
      return minVwOut;
    }
    return out(m, fixedNum);
  }
}



function px2vw(width, str, minWidth, fixedNum) {
  width = width || WIDTH;
  minWidth = minWidth || WIDTH;
  var minVw = (1 / minWidth) * 100;
  return str.replace(REG, matchCtrl(width, minVw, fixedNum));
}

module.exports = px2vw;
