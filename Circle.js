class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  get Color() {
    return this.color;
  }

  set Color(value) {
    this.color = value;
  }
  get Area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }
  get toString() {
    let str = `Circle[radius= ${this.radius} , Color= ${this.Color}]`;
    return str;
  }
}

let circle1 = new Circle(1, "Red");
circle1.Color = "yellow";
circle1.radius = 3
console.log(circle1.Color);
console.log(circle1.radius);
console.log(circle1.Area.toFixed(2));
console.log(circle1.circumference.toFixed(2));
console.log(circle1.toString);




//_______OUTPUT___________
yellow
3
28.27
18.85
Circle[radius= 3 , Color= yellow]
