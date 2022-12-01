Array;
[1, 2].map;

// Array의 every api예제 1
// 인자로 전달된 콜백함수를 배열의 모든 요소들이 충족하는지 검사
type Student = {
  passed: boolean;
}
const students: Student[] = [{passed: true}, {passed: true}, {passed: true}]
const result = students.every(students => students.passed);
console.log(result);

// Array의 every api예제 2
// 배열의 아이템들이 서브타입에도 속하는지 확인
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));
