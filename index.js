let franc = require('franc')
let langs = require('langs');
let input = process.argv[2];
let langCode = franc(input);
let language = langs.where("3", langCode);



function flatten() {
    let arr = []
    let newArr = []
    for (let i = 0; i < arguments.length; i++) {
        arr = arr.concat(arguments[i])
    }
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < arr.length; j++) {
            newArr = newArr.concat(arr[j])
        }
        arr = newArr;
        newArr = []
    }
    return arr;
}
  
