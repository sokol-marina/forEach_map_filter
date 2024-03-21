// Question #1
// new Set([1,1,2,2,3,4]) // {1,2,3,4}
// Question #2
// [...new Set("referee")].join("") // "ref"
// Question #3
// 0: {Array(3) => true}
// 1: {Array(3) => false}
// hasDuplicate
// const hasDuplicate = arr => new Set(arr).size !== arr.length


function isVowel(char){
    return "aeiou".includes(char);
  }

function vowelCount (string) {
    const vowelMap = new Map();
    for (const i of string) {

        if (isVowel(i.toLowerCase())){
            if(vowelMap.has(i.toLowerCase)){
                vowelMap.set(i.toLowerCase, vowelMap.get(i.toLowerCase)+1)
            }else{
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
}