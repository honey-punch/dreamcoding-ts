"use strict";
{
    // Array
    const fruits = ['🍈', '🍍'];
    const numbers1 = [1, 2]; // 일관성 있게!✨
    const numbers2 = [1, 2];
    // readonly로 변경 불가능하게 만들 수 있음
    function printArray(fruits) {
    }
    // Tuple
    // 여러 타입을 가질 수 있는 배열
    // 사용을 권장하지 않음 💩
    // interface, type alias, class로 대체해서 사용
    let student;
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123
    const [name, age] = student;
    console.log(name);
    // tuple 사용 예제
    // 리액트 useState()
}
