"use strict";
{
    class SimpleEither {
        constructor(leftValue, rightValue) {
            this.leftValue = leftValue;
            this.rightValue = rightValue;
        }
        left() {
            return this.leftValue;
        }
        right() {
            return this.rightValue;
        }
    }
    const either = new SimpleEither(4, 5);
    either.left(); // 4
    either.right(); // 5
    const best = new SimpleEither({ name: 'string' }, 'hello');
}
