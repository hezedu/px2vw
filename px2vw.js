var WIDTH = 320,
  FIXED = 5;

var REG = /([1-9]\d*\.\d*|0\.\d*[1-9]\d|\d)+px/gi; //去零正则表达式

function trimEnd0(str) { //去掉未尾多余的0.
  str = str.replace(/0+$/, '');
  var lastIndex = str.length - 1;
  return str[lastIndex] !== '.' ? str : str.substr(0, lastIndex);
}

function matchCtrl(width, fixed) {
  fixed = fixed || FIXED;
  width = width || WIDTH;
  return function(m) { //replace匹配字符串处理
    m = m.substr(0, m.length - 2);
    m = Number(m);
    m = (m / width) * 100;
    m = m.toFixed(fixed);
    return trimEnd0(m) + 'vw';
  }
}

function px2vw(str, opt) {
  opt = opt || {};
  return str.replace(REG, matchCtrl(opt.width, opt.fixed));
}
module.exports = px2vw;