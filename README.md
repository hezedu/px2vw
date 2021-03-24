# px2vw 1.2.2
css's px to vw. online edit:[https://hezedu.github.io/px2vw/](https://hezedu.github.io/px2vw/)
### install
`npm install px2vw`

Files in directory `./dist` can be used directly as an AMD module, or Direct <script> Include(px2vw will be registered as a global variable).

## API(English)
### px2vw(width, content[, minWidth])

- `width`  <**Number**> Client width(px)。default: `320`
- `content`  <**String**> css Source file content
- `minWidth` <**Number**> Optional, Client minimum width(px). default: `320`. If the vw unit is too small, it will not be displayed. For example, 0.0125vw is not displayed on the 320 screen. (v1.2.2 Update)
## API(中文)
### px2vw(width, content[, minWidth])

- `width`  <**Number**> 客户端宽度(px)。默认: `320`。
- `content`  <**String**> css源文件内容。
- `minWidth` <**Number**> 可选参数。客户端最小宽度(px)。默认: `320`。如果 vw 单位太小将会不显示。 比如 0.0125vw 在 320 屏上不显示。故设此参数。(1.2.2 更新)
### example
```js
var result = px2vw(750, '.title: height:30px; border:1px solid red;', 320);
console.log(result);
// .title: height:7.246376811594203vw; border:0.3125vw solid red;
```
