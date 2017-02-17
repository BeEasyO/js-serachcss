fs = require('fs')


function uniq(a) {
   return Array.from(new Set(a));
}


fs.readFile('read.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var myString = data.replace(/.*?"/,'');
  myString = myString.replace(/\r|\n|\\|\>|\<|\//g,' ');
  var split = myString.split(/"/);
  var uniqueArray = uniq(split);
  uniqueArray = uniqueArray.filter(function(current){
    if(current.search(/(\(|\)|,)/)<0)
      return current;
  });

  uniqueArray.forEach(function(item, i, arr){
      arr[i]=item.split(' ');
  });

    var concat = uniqueArray.reduce(function(result, current) {
  return result.concat(current);
    }, []);
    uniqueArray = uniq(concat);
    uniqueArray = uniqueArray.filter(function(current){
    if(current.search(/[^A-Za-z0-9\-\_]/g)<0)
      return current;
  });

  console.log(uniqueArray);
});