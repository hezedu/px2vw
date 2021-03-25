//****************px2vw start****************
/*!
 * version 1.3.0
 * MIT License
 * https://github.com/hezedu/px2vw
 */

//****************px2vw end****************
!function(){var n=/([1-9]\d*\.\d*|0\.\d*[1-9]|\d)+px(?!(\s*\)))/gi;function e(n){return n+"vw"}function r(n,e){return r=n.toFixed(e),t=(r=r.replace(/0+$/,"")).length-1,("."!==r[t]?r:r.substr(0,t))+"vw";var r,t}function t(t,u,i,f){t=t||320;var c=1/(i=i||320)*100;return u.replace(n,function(n,t,u){f+="vw";var i=u?r:e,f=i(t,u);return function(e){return(e=(e="."===(e=e.substr(0,e.length-2))[0]?Number("0"+e):Number(e))/n*100)<t?f:i(e,u)}}(t,c,f))}"function"==typeof define&&define.amd?define((function(){return t})):this.px2vw=t}();

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
    console.log('handleIsFixedChange')
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
