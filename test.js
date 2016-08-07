var px2vw = require('./px2vw');


/*for (var i = 90; i < 99; i++) {
  console.log(px2vw(i + 'px'));
  console.log(px2vw(i + 'px', {
    width: 540
  }));
}*/
var str = px2vw('3px');
console.log('def:', str);

str = px2vw('3px', {width:414});
console.log('width 640px:', str);

str = px2vw('3px', {width:414, fixed:8});
console.log('width 414px, fixed 8:', str);

setTimeout(function(argument) {
  for (var i = 90; i < 99; i++) {
    console.log('540', px2vw(i + 'px', {
      width: 540
    }));
  }
});

/*setTimeout(function(argument) {
  for (var i = 90; i < 99; i++) {
    console.log('320', px2vw(i + 'px'));
  }
})*/