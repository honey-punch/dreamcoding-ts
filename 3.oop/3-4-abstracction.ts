{
  type CoffeeCup = {
    shot: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private coffeeBeans: number = 0;
    private static BEANS_GRAM_PER_SHOT: number = 7;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number):CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    clean() {
      console.log('clean!!!!!!');
      
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }
    private preheat(): void {
      console.log('heating up');
    }
    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...`);
      return {
        shot: shots,
        hasMilk: false,
      }; 
      
    }
    makeCoffee(shots: number): CoffeeCup {
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
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('양수를 넣어주세여');
      }
      this.coffeeBeans += beans;
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makerCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makerCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
      
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const a = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  a.makerCoffee();
  pro.makerCoffee();
}