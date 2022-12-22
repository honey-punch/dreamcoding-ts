"use strict";
{
    class Animal {
        constructor() {
            this.state = '0';
        }
        stay() {
            this.state = 'hungry';
        }
        walk() {
            this.state = 'tired';
        }
        feed() {
            this.state = 'full';
        }
        play() {
            this.state = 'happy';
        }
    }
    const cat = new Animal;
    console.log(cat);
    cat.stay();
    console.log(cat);
    // 정보를 은닉할 수 있는 방법
    // public
    // private: 외부 접근 불가
    // protected: 외부 접근 불가(상속된 인스턴스에서는 변경 가능)
    class CoffeeMachine {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        }
        makeCoffee(shots) {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            };
        }
        // 위에서 정의한 private 변수를 변경할 수 있는 함수를 만듦
        fillCoffeeBeans(beans) {
            if (beans < 0) {
                throw new Error('양수를 넣어주세여');
            }
            this.coffeeBeans += beans;
        }
    }
    CoffeeMachine.BEANS_GRAM_PER_SHOT = 7;
    const maker = new CoffeeMachine(2);
    maker.fillCoffeeBeans(32);
    // getter, setter
    class User {
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        // 값을 불러올때
        get age() {
            return this.age1;
        }
        // 값을 변경할때
        set age(num) {
            this.age1 = num;
        }
        // 생성자 인자에 접근제어자 public, private, protected를 설정하면 위에서 굳이 멤버 변수를 정의하지 않아도 됨
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age1 = 4;
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    const user = new User('Steve', 'Jobs');
    console.log(user.fullName);
    user.age = 6;
    console.log(user.fullName);
}
