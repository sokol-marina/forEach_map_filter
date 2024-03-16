function extractValue(arr, key) {
  return arr.reduce(function (accum, nextVal) {
    accum.push(nextVal[key]);
    return accum;
  }, []);
}

function vowelCount(str) {
  const vowels = "aeiou";
  return str.split("").reduce(function (acc, next) {
    let lowerCased = next.toLowerCase();
    if (vowels.indexOf(lowerCased) !== -1) {
      if (acc[lowerCased]) {
        acc[lowerCased]++;
      } else acc[lowerCased] = 1;
    }
    return acc;
  }, {});
}
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}
function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}