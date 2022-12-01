console.log(this); // window

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // window
window.simpleFunc(); // window

console.clear();

class Counter {
  count = 0;
  increase = function() {
    console.log(this);
  }
}
const counter = new Counter();
counter.increase(); // Counter(class)

// class에 있던 함수를 caller에 할당하면 this에 대한 정보를 잃어버림
// const caller = counter.increase;
// caller(); // undefined

// this정보를 잃어버리지 않으려면 바인드해야함
const caller = counter.increase.bind(counter);
caller(); // Counter

// 혹은 클래스에서 arrow function을 이용하면 바인딩을 안해도 됨 ⭐️

class Bob {
  run = () => {}
}
const bob = new Bob();
// bob.run에 counter.increase를 할당하면 원래의 this정보(Counter)를 잃어버리고 Bob 클래스를 가리키게 됨
bob.run = counter.increase;
bob.run(); // Bob