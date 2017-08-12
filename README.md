# px2vw
css's px to vw. online edit:[https://hezedu.github.io/px2vw/](https://hezedu.github.io/px2vw/)

[Switch to English README](README-en.md)
## 用法
```js
px2vw(str, content);
// => str
```
### Options:
* `width`  <**Number**> 客户端宽度(px)。默认`320`.
* `content`  <**String**> css源文件内容

### example
```js
var str = px2vw(414, '3px');
console.log('width 414px, fixed 8:', str);
```
加载文件：
```js
var fs = require('fs');
var px2vw = require('px2vw');

var src = fs.readFileSync('./style.css').toString();
fs.writeFileSync('./style_px2vw.css', px2vw(src));
```
### install
`npm install px2vw`
