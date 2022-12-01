{
  const obj = {
    name: 'jocheol',
  }
  obj.name // 'jocheol'
  obj['name'] // 'jocheol'

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'femail';
  }

  type Name = Animal['name'];
  const text: Name = 'only string';

  type Gender = Animal['gender']; // 'male' | 'femail'
  const gender: Gender = 'male';

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key:Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender'];
  }
  const person: Person = {
    name: 'jicheol',
    gender: 'male',
  }
}