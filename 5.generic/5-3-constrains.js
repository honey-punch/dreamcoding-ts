"use strict";
class FullTimeEmployee {
    pay() {
        console.log('full time!!');
    }
    workFullTime() {
    }
}
class PartTimeEmployee {
    pay() {
        console.log('part time!!');
    }
    workPartTime() {
    }
}
// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee) {
    employee.pay();
    return employee;
}
// 제네릭으로 다시 구현
// 제네릭에 조건을 걸 수 있음
function pay(employee) {
    employee.pay();
    return employee;
}
const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();
const ellieAfterPay = payBad(ellie);
const bobAfterPay = payBad(bob);
ellieAfterPay.pay();
const obj = {
    name: 'ellie',
    age: 20,
};
const obj2 = {
    animal: '😿',
};
console.log(obj2['animal']);
function getValue(obj, key) {
    return obj[key];
}
console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
