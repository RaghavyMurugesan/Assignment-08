class Uber {
  constructor(ride, km) {
    this.ride = ride;
    this.distance = km;
  }

  get price() {
    if (this.ride === "Micro") {
      var minCharge = 30;
      var Chargeperkm = 40;
      return minCharge + Chargeperkm * this.distance;
    }
    if (this.ride === "Mini") {
      var minCharge = 50;
      var Chargeperkm = 90;
      return minCharge + Chargeperkm * this.distance;
    }
    if (this.ride === "Prime") {
      var minCharge = 70;
      var Chargeperkm = 100;
      return minCharge + Chargeperkm * this.distance;
    }
  }
}

let receipt1 = new Uber("Mini", 12);
console.log(receipt1.price);

//OUTPUT
//1130
