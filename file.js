fs = require('fs')


function uniq(a) {
   return Array.from(new Set(a));
}


fs.readFile('read.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var myString = data.replace(/.*?"/,'');
  myString = myString.replace(/\r|\n/g,'');
  myString = myString.replace(/\//g,'');
  var split = myString.split(/".+?"/);
  var uniqueArray = uniq(split);
  uniqueArray.forEach(function(item, i, arr){
  		arr[i]=item.split(' ');
  		arr[i] = uniq(arr[i]);
  });
  console.log(uniqueArray);
});