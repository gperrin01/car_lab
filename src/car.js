function Car(make, model, year, color){
  // this.make = ;
  // this.model = ;
  this.year = year;
  // this.color = ;
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = 'Manufacturer';
  this.passengers = [];
}

Car.prototype.sale = function(newOwner){
  myCar.previousOwners.push(myCar.currentOwner); 
  myCar.currentOwner = newOwner; 
   // should I have just written 'Manufacturer' ??
};

Car.prototype.paint = function(newColor){

};


module.exports=Car;