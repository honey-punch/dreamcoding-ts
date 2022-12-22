"use strict";
{
    function checkNullBad(arg) {
        if (arg == null) {
            throw new Error('null입니다!');
        }
        return arg;
    }
    function checkNotNullAnyBad(arg) {
        if (arg == null) {
            throw new Error('null입니다!');
        }
        return arg;
    }
    // 어떤 타입이든 같은 타입을 리턴
    // 일반적으로는 맨앞 한글자만 작성
    function checkNotNull(arg) {
        if (arg == null) {
            throw new Error('null입니다!');
        }
        return arg;
    }
    const number = checkNotNull(123);
    const boal = checkNotNull(true);
}
