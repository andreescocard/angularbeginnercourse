"use strict";
class Employee {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    getNameWithAddress() {
        return this.name + " " + this.address;
    }
}
let john = new Employee(1, "John", "highway 71");
let address = john.getNameWithAddress();
john.id = 1;
john.name = "John";
john.address = "highway 71";
console.log(address);
