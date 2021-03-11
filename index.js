

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

  
