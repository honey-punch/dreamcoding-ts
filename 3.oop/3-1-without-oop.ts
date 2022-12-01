// 절차지향적으로 만들기
{
  // 내가 한거
  const coffeeMachine = {
  make: (bean:string, shot:number) => {
    return `${bean} ${shot}shot coffee`;
    }
  }
  console.log(coffeeMachine.make('루왁', 1));
  console.log(coffeeMachine.make('루왁', 3));

// 쌤이 한거
type CoffeeCup = {
  shot: number;
  hasMilk: boolean;
}

const BEANS_GRAM_PER_SHOT: number = 7;
let coffeeBeans: number = 0;

function makeCoffee(shot: number): CoffeeCup {
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
