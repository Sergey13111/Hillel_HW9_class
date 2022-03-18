"use strict";

class Employee  {
    static numberVacationDays = 18;

    constructor (firstName, lastName, age, jobPosition, salary) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    calcYearSalary() {
        return this.salary * 12;
    }
}

const employee1 = new Employee ("Ivan", "Ivanov", 30, "welder", 1000);
const employee2 = new Employee ("Kolya", "Petrov", 35, "turner", 800);
employee1.fullName;
employee2.fullName;
console.log(employee1.calcYearSalary());
console.log(employee2.calcYearSalary());

console.log(employee1);
console.log(employee2);