"use strict";
Array;
[1, 2].map;
const students = [{ passed: true }, { passed: true }, { passed: true }];
const result = students.every(students => students.passed);
console.log(result);
// Array의 every api예제 2
// 배열의 아이템들이 서브타입에도 속하는지 확인
class Animal {
}
class Cat extends Animal {
    constructor() {
        super(...arguments);
        this.isCat = true;
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.isDog = false;
    }
}
const animals = [new Cat(), new Cat(), new Dog()];
function isCat(animal) {
    return animal.isCat !== undefined;
}
console.log(animals.every(isCat));
