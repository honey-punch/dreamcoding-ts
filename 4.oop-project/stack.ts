import LinkedList from "ts-linked-list";


  interface Stack {
  // 사이즈 갯수만틈만 pop을 호출
  readonly size: number;
  push(value: string): void;
  pop(): string;
  }

// 내가 한것

class MyStack implements Stack {
  readonly size: number =  3;
  list = new LinkedList<string>;
  push(value: string): void {
    if (this.list.length < this.size) {
      this.list.append(value);
    } else {
      throw new Error('stack이 꽉 찼습니다.');
    }
  }

  pop(): string {
    const lastElement = this.list.get(this.list.length-1);
    console.log(`${lastElement}가 stack에서 나갔습니다.`);
    this.list.removeAt(this.list.length-1);
    return `${lastElement}가 stack에서 나갔습니다.`;
  }
}

  // const stack = new MyStack();
  // stack.push('bob');
  // stack.push('park');
  // stack.push('jicheol');
  // stack.pop();
  // stack.pop();

  // console.log(stack.list);


// 쌤이 한거
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}

class StackImpl implements Stack {
  // 0으로 초기화
  private _size: number = 0;

  private head?: StackNode;

  constructor(private capacity: number) {
    
  }

  // 읽을 수만 있고 내부적으로는 변경할 수 있게하려면 readonly보다는 getter를 사용하는 게 좋음
  // private 변수와 같은 이름이라면 일반적으로 private변수에 underscore를 사용해서 표기
  get size(): number {
    return this._size;
  }
  
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('stack is full!');
    }
    const node: StackNode = {value, next: this.head};
    this.head = node;
    this._size++;
  }

  pop(): string {
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
while(stack1.size !== 0) {
  console.log(stack1.pop());
  
}
stack1.pop();