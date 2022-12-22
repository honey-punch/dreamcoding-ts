"use strict";
{
    class CoffeeMachine {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        makeCoffee(shot) {
            if (this.coffeeBeans < shot * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shot * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            return {
                shot: shot,
                hasMilk: false,
            };
        }
    }
    CoffeeMachine.BEANS_GRAM_PER_SHOT = 7;
    const maker = new CoffeeMachine(2);
    console.log(maker);
}
