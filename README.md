# px2vw
css's px to vw. online edit:[https://hezedu.github.io/px2vw/](https://hezedu.github.io/px2vw/)
### install
`npm install px2vw`

## API
### px2vw(str, content)

- `width`  <**Number**> 客户端宽度(px)。默认`320`.
- `content`  <**String**> css源文件内容

### example
```js
var result = px2vw(414, '.title: height:30px');
console.log(result);
```
