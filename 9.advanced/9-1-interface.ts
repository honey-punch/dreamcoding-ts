type PositionType = {
  x: number;
  y: number;
}
interface PositionInterface {
  x: number;
  y: number;
}

// object ⭐️
const obj1: PositionType = {
  x: 1,
  y: 2,
}
const obj2: PositionInterface = {
  x: 1,
  y: 2,
  // 밑에 interface 결합에 의해 z값을 추가해야 에러가 나지 않음
  z: 3,
}

// class ⭐️
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  // 밑에 interface 결합에 의해 z값을 추가해야 에러가 나지 않음
  z: number;
}

// extends ⭐️
// type과 interface 둘 다 확장 가능
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & {z: number};

// interface만 가능
// merge
// 추가하고 싶은 내용을 같은 이름의 interface로 정의하면 됨
interface PositionInterface {
  z: number;
}

// type만 가능
// computed properties
type Person = {
  name: string,
  age: number,
}
type Name = Person['name']; // string

type NumberType = number;
//union type
type Direction = 'up' | 'down' | 'left' | 'right';