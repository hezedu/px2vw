# px2vw
css's px to vw.
## API `px2vw(str, opts);`
### opts:
```js
{
  width: 320, //px源文件所依据的客户端宽度(px)。默认320. 
  fixed: 5  //转成vw后，四舍五入后小数点后位数,(最大20)。默认5
}
```
## example
```js
var str = px2vw('3px');
console.log('def:', str);

str = px2vw('3px', {width:414});
console.log('width 640px:', str);

str = px2vw('3px', {width:414, fixed:8});
console.log('width 414px, fixed 8:', str);
```
加载文件：
```js
var fs = require('fs');
var px2vw = require('px2vw');
var src = fs.readFileSync('./style.css').toString();
fs.writeFileSync('./style_px2vw.css', px2vw(src));
```
