function Car(make, model, year, color){
  // this.make = ;
  // this.model = ;
  this.year = year;
  // this.color = ;
  this.state = 'off';
  this.previousOwners = [];
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;