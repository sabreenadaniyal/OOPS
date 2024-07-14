//=============================OOPS(Object Oriented Programming)================================================
//To design a program using classes and objects.
class Student{
  name:string
  timings:string | number

 constructor(name:string, timings:string | number){
  this.name = name
  this.timings = timings
 } 
stdSchedule():string{
    return `My name is "${this.name}" & my class timing is Wednesday ${this.timings}`
}
}
let std = new Student("Daniya","2-5 pm")
console.log(std.stdSchedule());

//**********************************ANOTHER EXAMPLE*****************************************************
/*another example to explain the function:(passing the parameter but in
 return we don't need to write this.in getDetails parameter)*/
class Car{
    name:string
    color:string
    noOfDoor:number

constructor(name:string, color:string, noOfDoor:number){
   this.name = name
   this.color = color
   this.noOfDoor = noOfDoor
}    
getDetails(isAuto:boolean):any{
 return `My favourite vehicle is ${this.name},It is ${this.color} in color,It has ${this.noOfDoor} doors
  & Is it Auto?: ${isAuto}`
}
}
let vehicle = new Car("Civic","Black",4)
console.log(vehicle.getDetails(true));

