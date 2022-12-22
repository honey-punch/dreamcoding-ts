"use strict";
{
    class CoffeeMachine {
        constructor(coffeeBeans, milk, sugar) {
            this.milk = milk;
            this.sugar = sugar;
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
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
    // 우유 거품기
    class CheapMilkSteamer {
        steamMilk() {
            console.log('steaming some milk');
        }
        makeMilk(cup) {
            this.steamMilk();
            return Object.assign(Object.assign({}, cup), { hasSugar: true });
        }
    }
    class FancyMilkSteamer {
        steamMilk() {
            console.log('fancy steaming some milk');
        }
        makeMilk(cup) {
            this.steamMilk();
            return Object.assign(Object.assign({}, cup), { hasSugar: true });
        }
    }
    class ColdMilkSteamer {
        steamMilk() {
            console.log('cold steaming some milk');
        }
        makeMilk(cup) {
            this.steamMilk();
            return Object.assign(Object.assign({}, cup), { hasSugar: true });
        }
    }
    class NoMilk {
        makeMilk(cup) {
            return cup;
        }
    }
    // 설탕 제조기
    class CandySugarMixer {
        getSugar() {
            console.log('getting some sugar from candy');
            return true;
        }
        addSugar(cup) {
            const sugar = this.getSugar();
            this.getSugar();
            return Object.assign(Object.assign({}, cup), { hasMilk: true });
        }
    }
    class SugarMixer {
        getSugar() {
            console.log('getting some sugar from jar');
            return true;
        }
        addSugar(cup) {
            const sugar = this.getSugar();
            this.getSugar();
            return Object.assign(Object.assign({}, cup), { hasMilk: true });
        }
    }
    class NoSugar {
        addSugar(cup) {
            return cup;
        }
    }
    // milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkSteamer = new ColdMilkSteamer();
    const noMilk = new NoMilk();
    // sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();
    // machine
    const sweetCandyMachine = new CoffeeMachine(32, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(32, noMilk, sugar);
    const latteMachine = new CoffeeMachine(32, cheapMilkMaker, noSugar);
    const coldlatteMachine = new CoffeeMachine(32, coldMilkSteamer, noSugar);
    const sweetLatteMachine = new CoffeeMachine(32, fancyMilkMaker, sugar);
}
