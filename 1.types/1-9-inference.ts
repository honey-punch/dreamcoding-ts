// Type Inference
// 타입 추론
let text: string = 'hi';
// 함수인자에서 타입을 지정하지 않으면 any로 지정
function print(message) {
  console.log(message);
}
print('hi');
print(1);

function add(x: number, y: number) {
  return x + y;
}

const result = add(1, 2);

// 코드가 복잡해지면 타입을 명시하는게 좋음