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
  let un1: undefined; // π©
  let un2: number | undefined; // λ³΄ν΅ μ΄λ κ² μμ±
  un2 = undefined;
  un2 = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null; // λ³΄ν΅ μ΄λ κ² μμ±

  // unknown π©
   // μ΄λ€ νμμ΄λ  ν λΉ κ°λ₯, μ¬μ©νμ§ μλκ±Έ μΆμ²
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  // any π©
   // μ΄λ€ νμμ΄λ  ν λΉ κ°λ₯, μ¬μ©νμ§ μλκ±Έ μΆμ²
  let anything: any = 1;
  anything = 'hi';

  // void
  // ν¨μμμ μλ¬΄κ²λ λ¦¬ν΄νμ§ μμλ
  function print(): void {
    console.log('hi');
  }
  // λ³μμ μ¬μ©νλ©΄ undefinedλ§ ν λΉ κ°λ₯ν΄μ§
  let a: void = undefined; // π©

  // never
  // ν¨μμμ μ λ λ¦¬ν΄λμ§ μμ κ²½μ°λ₯Ό λͺμν λ μ¬μ©
  // ν¨μμμ neverνμμ λ¦¬ν΄νλ κ²½μ°μλ μλ¬λ₯Ό λμ§λμ§
  // whileλ¬Έμ μ‘°κ±΄μ trueλ‘ μ½λ©ν΄ κ³μ λκ²λ λ§λ€μ΄μΌν¨
  // returnνλ©΄ μ€λ₯ λ°μ
  function error(message: string): never {
    // message -> server (log)

    throw new Error(message);
    // while(true) {

    // }
    // return;
  }
  let never: never; // π©

  // object
  // μ€λΈμ νΈλ λ°°μ΄ λ± μμνμμ μ μΈν λͺ¨λ  νμμ λ΄μ μ μμ
  let obj: object; // π©
  function object(obj: object) {
    
  }
  object({name: 'jicheol'});
  object({name: 'jicheol'});
}