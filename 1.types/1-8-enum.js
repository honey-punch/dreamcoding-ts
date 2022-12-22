"use strict";
{
    // Enum
    // 여러 상수 값들을 한 곳에 모아 정의할 수 있게 도와주는 타입
    // js
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({
        "MONDAY": 0,
        "TUESDAY": 1,
    });
    const today = DAYS_ENUM.MONDAY;
    console.log(today);
    // ts
    let Days;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days["Tuesday"] = "string";
        Days["Wednesday"] = "aa";
    })(Days || (Days = {}));
    console.log(Days.Monday);
    console.log(Days.Tuesday);
    console.log(Days.Wednesday);
    // 문자열도 할당 가능
    // 보통은 Enum의 사용을 권장하지 않음 💩
    let day = Days.Monday;
    day = Days.Tuesday;
    day = 111; // 타입이 보장되지 않고 재할당이 가능하기 때문
    console.log(day);
    const daysOfWeek = 'Monday';
}
