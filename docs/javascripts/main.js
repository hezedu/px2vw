/*!
 * version 1.3.2
 * MIT License
 * https://github.com/hezedu/px2vw
 */
(function(){
  //dist-wrap top
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

(function() {
  
  function $(id){
    return document.getElementById(id)
  }

  var $pxText = $('pxText'),
    $optWidth = $('optWidth'),
    $optMinWidth = $('optMinWidth'),
    $isFixed = $('isFixed'),
    $toFixed = $('optToFixed'),
    $vwTest = $('vwText'),
    $btn_submit = $('btn_submit');

  // var def_px_text = "@media (max-width: 750px){.test{height:30px;}}";
  // if (!$pxText.value) {
  //   $pxText.value = def_px_text;
  // }
  var DEF_WIDTH = 750;
  var DEF_MIN_WIDTH = 320;
  var DEF_IS_FIXED = 0;
  var DEF_TO_FIXED = 6;

  function getInitValue(key, def){
    var v = localStorage.getItem(key);
    if(v){
      v = Number(v);
    }
    if(v){
      return v;
    }
    return def;
  }



  var _width = getInitValue('width', DEF_WIDTH);
  var _min_width = getInitValue('min_width', DEF_MIN_WIDTH);
  var _is_fixed = getInitValue('is_fixed', DEF_IS_FIXED);
  var _to_fixed = getInitValue('to_fixed', DEF_TO_FIXED);
  $optWidth.value = _width;
  $optMinWidth.value = _min_width;
  $toFixed.value = _to_fixed;
  if(_is_fixed === 1){
    $isFixed.checked = true;
  }

  function handleIsFixedChange(){
    $toFixed.disabled = $isFixed.checked ? '' : 'disabled';
  }
  handleIsFixedChange();
  $isFixed.addEventListener('change', handleIsFixedChange);



  function to() {
    var _currValue = Number($optWidth.value);
    if(_currValue !== _width){
      _width = _currValue;
      localStorage.setItem('width', _width);
    }
    _currValue = Number($optMinWidth.value);
    if(_currValue !== _min_width){
      _min_width = _currValue;
      localStorage.setItem('min_width', _min_width);
    }
    _currValue = $isFixed.checked ? 1 : 0;
    if(_currValue !== _is_fixed){
      _is_fixed = _currValue;
      localStorage.setItem('is_fixed', _is_fixed);
    }

    _currValue = Number($toFixed.value);
    if(_currValue !== _to_fixed){
      _to_fixed = _currValue;
      localStorage.setItem('to_fixed', _to_fixed);
    }

    $vwTest.value = px2vw(_width, $pxText.value, _min_width, _is_fixed ? _to_fixed : undefined);
  }

  $pxText.addEventListener('input', function() {
    to();
  });

  $btn_submit.addEventListener('click', function(){
    to();
  })

  $vwTest.addEventListener('click', function() {
    $vwTest.select();
  });
  to();
  $pxText.focus();

})();
