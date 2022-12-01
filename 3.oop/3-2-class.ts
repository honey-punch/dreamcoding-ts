{
  // 클래스 이용해서 객체지향적으로 코딩하기
  type CoffeeCup = {
    shot: number;
    hasMilk: boolean;
  }

  class CoffeeMachine {
    coffeeBeans: number = 0;
    static BEANS_GRAM_PER_SHOT: number = 7;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    
    makeCoffee(shot: number): CoffeeCup {
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

  const maker = new CoffeeMachine(2);
  console.log(maker);
  
}