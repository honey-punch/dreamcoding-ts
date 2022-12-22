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
                shots: shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
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
    class CaffeLatteMachine extends CoffeeMachine {
        constructor(coffeeBeans, serialNumber) {
            super(coffeeBeans);
            this.serialNumber = serialNumber;
        }
        steamMilk() {
            console.log('steaming some milk');
        }
        makeCoffee(shots) {
            // 부모클래스에서 super로 받아오기
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return Object.assign(Object.assign({}, coffee), { hasMilk: true });
        }
    }
    class SweetCoffeeMachine extends CoffeeMachine {
        addSugar() {
            console.log('adding sugar');
        }
        makeCoffee(shots) {
            const coffee = super.makeCoffee(shots);
            this.addSugar();
            return Object.assign(Object.assign({}, coffee), { hasSugar: true });
        }
    }
    const latteMachine = new CaffeLatteMachine(23, 'sss');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    const sweetCoffeeMaker = new SweetCoffeeMachine(23);
    const sweetCoffee = sweetCoffeeMaker.makeCoffee(2);
    console.log(sweetCoffee);
    const machines = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'sss'),
        new SweetCoffeeMachine(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'sss'),
        new SweetCoffeeMachine(16),
    ];
    machines.forEach(machine => {
        console.log('-------------------');
        machine.makeCoffee(1);
    });
}
