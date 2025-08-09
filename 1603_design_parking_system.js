var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

ParkingSystem.prototype.addCar = function (carType) {
  switch (carType) {
    case 1:
      if (this.big >= 1) {
        this.big -= 1;
        return true;
      }
      break;
    case 2:
      if (this.medium >= 1) {
        this.medium -= 1;
        return true;
      }
      break;
    case 3:
      if (this.small >= 1) {
        this.small -= 1;
        return true;
      }
      break;
  }
  return false;
};

var obj = new ParkingSystem(1, 1, 0);
var param_1 = obj.addCar(1);
console.log(param_1);
