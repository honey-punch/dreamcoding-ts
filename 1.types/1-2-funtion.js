"use strict";
{
    // // js
    // function jsAdd(num1, num2) {
    //   return num1 + num2;
    // }
    // // ts
    // function add(num1: number, num2: number): number {
    //   return num1 + num2;
    // }
    // // js
    // function jsFetchNum(id) {
    //   return new Promise((resolve, reject) => {
    //     resolve(100);
    //   })
    // }
    // // ts
    // function FetchNum(id: string): Promise<number> {
    //   return new Promise((resolve, reject) => {
    //     resolve(100);
    //   })
    // }
    // js => ts
    // Optional parameter
    // 전달받을 수도 있고 전달받지 않을수도 있는 인자
    // 인자명 뒤에 ? 표기
    function printName(firstName, lastName) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('jicheol', 'jang');
    printName('jicheol');
    // Default parameter
    function printMessage(message = 'default') {
        console.log(message);
    }
    printMessage();
    // Rest parameter
    function addNumbers(...numbers) {
        let total = 0;
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total;
        // return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2, 3));
    console.log(addNumbers(1, 2, 3, 4, 5));
}
