class person {
  constructor(firstname, lastname, gender, age, designation) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.age = age;
    this.designation = designation;
  }

  get fulldetails() {
    return `
  Full Name: ${this.firstname} ${this.lastname}
  Gender: ${this.gender}
  Age: ${this.age}
  Designation: ${this.designation}`;
  }
}
let per = new person("Rajesh", "Kumar", "Male", 26, "Senior Developer");
console.log(per.fulldetails);



//______OUTPUT________

Full Name: Rajesh Kumar
  Gender: Male
  Age: 26
  Designation: Senior Developer
