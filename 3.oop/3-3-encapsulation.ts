{
  // 내가한거
  type State = '0' | 'hungry' | 'tired' | 'full' | 'happy';


  class Animal {
    private state: State = '0';
    constructor() {

    }
    stay () {
      this.state = 'hungry';
    }
    walk () {
      this.state = 'tired';
    }
    feed () {
      this.state = 'full';
    }
    play () {
      this.state = 'happy';
    }
  }

  const cat = new Animal;
  console.log(cat);
  
  cat.stay();
  console.log(cat);
  
  // 쌤이 한거
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // 정보를 은닉할 수 있는 방법
  // public
  // private: 외부 접근 불가
  // protected: 외부 접근 불가(상속된 인스턴스에서는 변경 가능)
  class CoffeeMachine {
    private coffeeBeans: number = 0;
    private static BEANS_GRAM_PER_SHOT: number = 7;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number):CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    // 위에서 정의한 private 변수를 변경할 수 있는 함수를 만듦
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('양수를 넣어주세여');
      }
      this.coffeeBeans += beans;
    }
  }

  const maker = new CoffeeMachine(2);
  maker.fillCoffeeBeans(32);
  
  
  // getter, setter
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    private age1 = 4;
    // 값을 불러올때
    get age():number {
      return this.age1;
    }
    // 값을 변경할때
    set age(num:number) {
      this.age1 = num;
    }
    // 생성자 인자에 접근제어자 public, private, protected를 설정하면 위에서 굳이 멤버 변수를 정의하지 않아도 됨
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.age = 6;
  console.log(user.fullName);
  
}