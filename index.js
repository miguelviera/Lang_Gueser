
let langs = require('langs');
let input = process.argv[2];
let langCode = franc(input);
let language = langs.where("3", langCode);

console.log(language.name);
