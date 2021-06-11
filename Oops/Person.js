//Constructor function
const Person = function(Name,Age){
    this.Name = Name
    this.Age = Age

    //Never do this in constructor functions, instead use Prototype and inherit the method
//     this.calcBirthYear = function(){
//         this.Year = 2021 - this.Age
//     }
}

// this will now be avaialable in all objects created for Person 
Person.prototype.calcBirthYear = function(){
            this.Year = 2021 - this.Age
        }

//Object Instance 
const log = new Person("Logan",27)

console.log(log.__proto__) // will print the prototype