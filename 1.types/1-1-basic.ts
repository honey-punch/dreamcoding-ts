{
  /**
   * Javascript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
  */

  // number
  const num: number = 1;

  // string
  const str: string = 'hi';

  // boolean
  const bool: boolean = true;

  // undefined
  let un1: undefined; // 💩
  let un2: number | undefined; // 보통 이렇게 작성
  un2 = undefined;
  un2 = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null; // 보통 이렇게 작성

  // unknown 💩
   // 어떤 타입이든 할당 가능, 사용하지 않는걸 추천
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  // any 💩
   // 어떤 타입이든 할당 가능, 사용하지 않는걸 추천
  let anything: any = 1;
  anything = 'hi';

  // void
  // 함수에서 아무것도 리턴하지 않을때
  function print(): void {
    console.log('hi');
  }
  // 변수에 사용하면 undefined만 할당 가능해짐
  let a: void = undefined; // 💩

  // never
  // 함수에서 절대 리턴되지 않을 경우를 명시할때 사용
  // 함수에서 never타입을 리턴하는 경우에는 에러를 던지던지
  // while문의 조건을 true로 코딩해 계속 돌게끔 만들어야함
  // return하면 오류 발생
  function error(message: string): never {
    // message -> server (log)

    throw new Error(message);
    // while(true) {

    // }
    // return;
  }
  let never: never; // 💩

  // object
  // 오브젝트나 배열 등 원시타입을 제외한 모든 타입을 담을 수 있음
  let obj: object; // 💩
  function object(obj: object) {
    
  }
  object({name: 'jicheol'});
  object({name: 'jicheol'});
}