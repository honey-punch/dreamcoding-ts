"use strict";
{
    class CoffeeMachine {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        }
        clean() {
            console.log('clean!!!!!!');
        }
        grindBeans(shots) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
        preheat() {
            console.log('heating up');
        }
        extract(shots) {
            console.log(`pulling ${shots} shots...`);
            return {
                shot: shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
            // if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
            //   throw new Error('Not enough coffee beans!');
            // }
            // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            // return {
            //   shot: shots,
            //   hasMilk: false,
            // };
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
    class AmateurUser {
        constructor(machine) {
            this.machine = machine;
        }
        makerCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }
    class ProBarista {
        constructor(machine) {
            this.machine = machine;
        }
        makerCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }
    const maker = CoffeeMachine.makeMachine(32);
    const a = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    a.makerCoffee();
    pro.makerCoffee();
}
