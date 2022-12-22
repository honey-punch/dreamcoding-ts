"use strict";
// Java: Exception
// JavaScript: Error
// const array = new Array(10000000000000000000000);
// Error(Exception) Handling: try -> catch -> finally
function readFile(fileName) {
    if (fileName === 'not exist') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents';
}
function closeFile(fileName) {
}
function run() {
    const fileName = 'not exist';
    try {
        console.log(readFile(fileName));
    }
    catch (error) {
        console.log(`catched!`);
        return;
        // 리턴이 되도 finally의 코드는 실행됨
    }
    finally {
        closeFile(fileName);
        console.log('closed');
    }
}
run();
