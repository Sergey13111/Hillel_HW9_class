"use strict";

class Person {
    numberVacationDays = 18;

    constructor (firstName, lastName, age, jobPosition, salary) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
    }

    get fullName() {
        console.log(this.firstName, this.lastName);
    }

    calcYearSalary() {
        let yearSalary = this.salary * 12;
        console.log(yearSalary); 
    }
}

const person1 = new Person("Ivan", "Ivanov", 30, "welder", 1000);
const person2 = new Person("Kolya", "Petrov", 35, "turner", 800);
person1.fullName;
person2.fullName;
person1.calcYearSalary();
person2.calcYearSalary();

console.log(person1);
console.log(person2);