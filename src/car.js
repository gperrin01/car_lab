function Car(make, model, year, color){
  // this.make = ;
  // this.model = ;
  this.year = year;
  this.color = color;
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = 'Manufacturer';
  this.passengers = [];
}

Car.prototype.sale = function(newOwner){
  myCar.previousOwners.push(myCar.currentOwner); 
  myCar.currentOwner = newOwner; 
};

Car.prototype.paint = function(newColor){
  myCar.color = newColor;
};

Car.prototype.start = function(){
  myCar.state = 'on';
};

Car.prototype.off = function(){
  myCar.state = 'off';
};

module.exports=Car;