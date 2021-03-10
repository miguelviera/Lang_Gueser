let franc = require('franc')
let langs = require('langs');
let input = process.argv[2];
let langCode = franc(input);
let language = langs.where("3", langCode);

//Clases 
  class Cylon {
    constructor(model, attack) {
       this.model = model
       this.attack = function() {
         return "Destroy all humans!"}    
     }
  }
  class HumanSkin extends Cylon{
    constructor (infiltrate) {
       super();
    this.infiltrate = function() {
      return "Infiltrate the colonies"}
     } 
  }

  
