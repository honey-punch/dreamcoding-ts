{
  // Type alias
  // 새로운 타입을 지정할 수 있음
  type Text = string;
  const name: Text = 'jicheol';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string,
    age: number
  }
  const student: Student = {
    name: 'jicheol',
    age: 12,
  }

  // String Literal Types
  type Name = 'name';
  let jicheolName: Name;
  jicheolName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}