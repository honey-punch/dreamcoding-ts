"use strict";
const position = { x: 0, y: 0, };
function move2(command) {
    switch (command) {
        case 'up':
            position.y += 1;
            break;
        case 'down':
            position.y -= 1;
            break;
        case 'left':
            position.x -= 1;
            break;
        case 'right':
            position.x += 1;
            break;
        default:
            throw new Error('no command');
    }
}
console.log(position); // { x: 0, y: 0}
move2('up');
console.log(position); // { x: 0, y: 1}
move2('down');
console.log(position); // { x: 0, y: 0}
move2('left');
console.log(position); // { x: -1, y: 0}
move2('right');
console.log(position); // { x: 0, y: 0}
