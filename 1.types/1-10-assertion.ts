{
  // Type assertions ๐ฉ

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);
  // ์๋ชป๋ ํ์์ด๋ฉด undefined
  // type assertion์ ํ์์ 100% ์ฅ๋ดํ ๋๋ง ์ฌ์ฉ!

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(2)); // ๐ฉ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2);
  // undefined์ผ์๋ ์์ด์ ๊ฒฝ๊ณ ๋ธ
  // !๋ก type assertionํ  ์ ์์

  // ๊ถ์ฅ๋์ง๋ ์์ง๋ง ๊ฐํน ํ๋ก ํธ์๋์์ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ
  // querySelector๋ null์ ๋ฆฌํดํ ์๋ ์๊ธฐ ๋๋ฌธ
  const button = document.querySelector('class');
  button!.nodeValue;
}