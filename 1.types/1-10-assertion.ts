{
  // Type assertions 💩

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);
  // 잘못된 타입이면 undefined
  // type assertion은 타입을 100% 장담할때만 사용!

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(2)); // 💩

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2);
  // undefined일수도 있어서 경고뜸
  // !로 type assertion할 수 있음

  // 권장되지는 않지만 간혹 프론트엔드에서 사용하는 경우
  // querySelector는 null을 리턴할수도 있기 때문
  const button = document.querySelector('class');
  button!.nodeValue;
}