{

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean; // optional
    hasSugar?: boolean; // optional
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // abstract 키워드를 붙이면 인스턴스를 만들 수 없음
  // 부모클래스, abstract클래스로만 사용 가능
  abstract class CoffeeMachine implements CoffeeMaker {
    private coffeeBeans: number = 0;
    private static BEANS_GRAM_PER_SHOT: number = 7;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    // 자식 클래스마다 다르게 구현하려는 함수앞에 abstract 키워드
    // 내용은 없어야함
    protected abstract extract(shots: number): CoffeeCup

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

    // 자식 클래스에서 내용 구현
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      // 부모클래스에서 super로 받아오기
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    private addSugar(): void {
      console.log('adding sugar');
    }

    // 자식 클래스에서 내용 구현
    protected extract(shots: number): CoffeeCup {
      this.addSugar();
      return {
        shots,
        hasSugar: true,
      }
    }
    
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  const latteMachine = new CaffeLatteMachine(23, 'sss');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);

  const sweetCoffeeMaker = new SweetCoffeeMachine(23);
  const sweetCoffee = sweetCoffeeMaker.makeCoffee(2);
  console.log(sweetCoffee);

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, 'sss'),
    new SweetCoffeeMachine(16),
    new CaffeLatteMachine(16, 'sss'),
    new SweetCoffeeMachine(16),
  ]
  machines.forEach(machine => {
    console.log('-------------------');
    machine.makeCoffee(1);
  })
}