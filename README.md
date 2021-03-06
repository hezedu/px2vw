# px2vw
css's px to vw. Online editor: [https://hezedu.github.io/px2vw/](https://hezedu.github.io/px2vw/)
### install
`npm install px2vw`

Files in directory `./dist`: Support AMD Module Loaders, or Direct <script> Include(**px2vw** will be registered as a global variable).

## API(English)
### px2vw(width, content[, minWidth[, fixedNum]])

- `width`  <**Number**> Client width(px)。default: `320`
- `content`  <**String**> css Source file content
- `minWidth` <**Number**> Optional, Client minimum width(px). default: `320`. If the vw unit is too small, it will not be displayed. For example, 0.0125vw is not displayed on the 320 screen. (v1.2.2 Update)
- `fixedNum` <**Number**> Optional, Decimal unit `toFixed` parameter. The smaller the value, the smaller the file, but the lower the accuracy. default: `undefined`(v1.3.0 Update).
## API(中文)
### px2vw(width, content[, minWidth[, fixedNum]])

- `width`  <**Number**> 客户端宽度(px)。默认: `320`。
- `content`  <**String**> css源文件内容。
- `minWidth` <**Number**> 可选参数，客户端最小宽度(px)。默认: `320`。如果 vw 单位太小将会不显示。 比如 0.0125vw 在 320 屏上不显示。故设此参数。(1.2.2 更新)
- `fixedNum` <**Number**> 可选参数，小数 `toFixed` 参数。值越小文件越小，但精度也越低。默认: `undefined`(v1.3.0 Update).
### example
```js
var result = px2vw(750, '.title: height:30px; border:1px solid red;', 320);
console.log(result);
// .title: height:4vw; border:0.3125vw solid red;
```
