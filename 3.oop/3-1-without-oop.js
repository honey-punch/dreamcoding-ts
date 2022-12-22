"use strict";
// 절차지향적으로 만들기
{
    // 내가 한거
    const coffeeMachine = {
        make: (bean, shot) => {
            return `${bean} ${shot}shot coffee`;
        }
    };
    console.log(coffeeMachine.make('루왁', 1));
    console.log(coffeeMachine.make('루왁', 3));
    const BEANS_GRAM_PER_SHOT = 7;
    let coffeeBeans = 0;
    function makeCoffee(shot) {
        if (coffeeBeans < shot * BEANS_GRAM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans -= shot * BEANS_GRAM_PER_SHOT;
        return {
            shot: shot,
            hasMilk: false,
        };
    }
    coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}
