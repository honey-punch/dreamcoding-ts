{

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  
  class CoffeeMachine implements CoffeeMaker {
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
        shots: shots,
        hasMilk: false,
      }; 
      
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    // 위에서 정의한 private 변수를 변경할 수 있는 함수를 만듦
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('양수를 넣어주세여');
      }
      this.coffeeBeans += beans;
    }
  }
  
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public serialNumber: string) {
      super(coffeeBeans)
    }
    private steamMilk(): void {
      console.log('steaming some milk');
    }

    makeCoffee(shots: number): { shots: number; hasMilk: boolean; } {
      // 부모클래스에서 super로 받아오기
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'sss');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  
  latteMachine.serialNumber
}