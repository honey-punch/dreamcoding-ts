"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_linked_list_1 = __importDefault(require("ts-linked-list"));
// 내가 한것
class MyStack {
    constructor() {
        this.size = 3;
        this.list = new ts_linked_list_1.default;
    }
    push(value) {
        if (this.list.length < this.size) {
            this.list.append(value);
        }
        else {
            throw new Error('stack이 꽉 찼습니다.');
        }
    }
    pop() {
        const lastElement = this.list.get(this.list.length - 1);
        console.log(`${lastElement}가 stack에서 나갔습니다.`);
        this.list.removeAt(this.list.length - 1);
        return `${lastElement}가 stack에서 나갔습니다.`;
    }
}
class StackImpl {
    constructor(capacity) {
        this.capacity = capacity;
        // 0으로 초기화
        this._size = 0;
    }
    // 읽을 수만 있고 내부적으로는 변경할 수 있게하려면 readonly보다는 getter를 사용하는 게 좋음
    // private 변수와 같은 이름이라면 일반적으로 private변수에 underscore를 사용해서 표기
    get size() {
        return this._size;
    }
    push(value) {
        if (this.size === this.capacity) {
            throw new Error('stack is full!');
        }
        const node = { value, next: this.head };
        this.head = node;
        this._size++;
    }
    pop() {
        if (this.head == null) {
            throw new Error('stack is empty');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}
const stack1 = new StackImpl(10);
stack1.push('jicheol 1');
stack1.push('bob 2');
stack1.push('steve 3');
while (stack1.size !== 0) {
    console.log(stack1.pop());
}
stack1.pop();
