/*!
 * MIT License
 * https://github.com/hezedu/px2vw
 */
(function(){
//dist-wrap top
  var WIDTH = 320;
  
  var REG = /([1-9]\d*\.\d*|0\.\d*[1-9]|\d)+px(?!(\s*\)))/gi; //去零正则表达式
  
  function matchCtrl(width, minVw) {
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
      return m + 'vw';
    }
  }
  
  function px2vw(width, str, minWidth) {
    width = width || WIDTH;
    minWidth = minWidth || WIDTH;
    var minVw = (1 / minWidth) * 100;
    return str.replace(REG, matchCtrl(width, minVw));
  }
  
  //module.exports = px2vw;
  

//dist-wrap bottom
  if(typeof define === 'function' && define.amd) {
    define(function() {
      return px2vw;
    });
  }else{
    this.px2vw = px2vw;
  }
})();