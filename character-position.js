var str = process.argv.slice(2).join("").split("");

function characterPosition(str) {
  var letters = {};
  for(var i in str) {
    var char = str[i];
    if(letters[char]) {
      letters[char].push(i)
    } else {
      letters[char] = [i]}
  }
  console.log(letters);
};

characterPosition(str);
