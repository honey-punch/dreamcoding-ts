interface Stack<V> {
// 사이즈 갯수만틈만 pop을 호출
readonly size: number;
push(value: V): void;
pop(): V;
}


// 쌤이 한거
type StackNode<V> = {
  readonly value: V;
  readonly next?: StackNode<V>;
}

class StackImpl<V> implements Stack<V> {
  // 0으로 초기화
  private _size: number = 0;

  private head?: StackNode<V>;

  constructor(private capacity: number) {
    
  }

  // 읽을 수만 있고 내부적으로는 변경할 수 있게하려면 readonly보다는 getter를 사용하는 게 좋음
  // private 변수와 같은 이름이라면 일반적으로 private변수에 underscore를 사용해서 표기
  get size(): number {
    return this._size;
  }
  
  push(value: V) {
    if (this.size === this.capacity) {
      throw new Error('stack is full!');
    }
    const node = {value, next: this.head};
    this.head = node;
    this._size++;
  }

  pop(): V {
    if (this.head == null) {
      throw new Error('stack is empty');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}
// 인스턴스를 만들때 <string>등 타입을 지정해줘야함
const stack1 = new StackImpl<string>(10);
stack1.push('jicheol 1');
stack1.push('bob 2');
stack1.push('ellie 3');

while (stack1.size !== 0) {
  console.log(stack1.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(1);
stack2.push(2);
stack2.push(3);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}