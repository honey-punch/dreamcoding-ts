{

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean; // optional
    hasSugar?: boolean; // optional
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  
  class CoffeeMachine implements CoffeeMaker {
    private coffeeBeans: number = 0;
    private static BEANS_GRAM_PER_SHOT: number = 7;

    constructor(coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }

    // 위에서 정의한 private 변수를 변경할 수 있는 함수를 만듦
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('양수를 넣어주세여');
      }
      this.coffeeBeans += beans;
    }
  }

  // 재료 interface
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('steaming some milk');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasSugar: true,
      }
    }
  }
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('fancy steaming some milk');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasSugar: true,
      }
    }
  }
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('cold steaming some milk');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasSugar: true,
      }
    }
  }
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }
  

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('getting some sugar from candy');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      this.getSugar();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('getting some sugar from jar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      this.getSugar();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }
  class NoSugar implements SugarProvider{
    addSugar(cup: CoffeeCup): CoffeeCup {
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