// export 하는 법
// 한파일 안에서 export default는 하나만
export default function add(a, b) {
  return a + b;
}

export function print() {
  console.log('print');
}

// 변수도 export 가능
export const number = 10;