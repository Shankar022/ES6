class Employee {
    constructor(name, gender, id) {
        this.name = name;
        this.gender = gender;
        this.id = id;
    }

    // static method
    static getClassDetails() {
        console.log("Inside Employee Class .");
    }

    // non-static method
    getEmployeeName() {
        console.log(`The Employee name is ${this.name}`);
    }
}

class Shankar extends Employee {
    constructor(name, gender, id, age) {
        super(name, gender, id);
        this.age = age;
    }

    getEmployeeName(){
        super.getEmployeeName();
    }

    getEmployeeDetails() {
        console.log(`The Employee name is ${this.name} age of ${this.age}`);
    }
}

const s = new Shankar("Shankar", "male", 1783901, 23);
s.getEmployeeDetails();
s.getEmployeeName();