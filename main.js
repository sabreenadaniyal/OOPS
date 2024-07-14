"use strict";
//=============================OOPS(Object Oriented Programming)================================================
//To design a program using classes and objects.
class Student {
    constructor(name, timings) {
        this.name = name;
        this.timings = timings;
    }
    stdSchedule() {
        return `My name is "${this.name}" & my class timing is Wednesday ${this.timings}`;
    }
}
let std = new Student("Daniya", "2-5 pm");
console.log(std.stdSchedule());
//**********************************ANOTHER EXAMPLE*****************************************************
//another example to explain 
class Car {
    constructor(name, color, noOfDoor) {
        this.name = name;
        this.color = color;
        this.noOfDoor = noOfDoor;
    }
    getDetails(isAuto) {
        return `My favourite vehicle is ${this.name},It is ${this.color} in color,It has ${this.noOfDoor} doors
  & Is it Auto?: ${isAuto}`;
    }
}
let vehicle = new Car("Civic", "Black", 4);
console.log(vehicle.getDetails(true));
