// type Video = {
//   title: string;
//   author: string;
//   description: string;
// }
// type VideoOptional = {
//   title?: string;
//   author?: string;
//   description?: string;
// }
// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
//   readonly description: string;
// }

// 위의 코드들을 간결하게, 재사용성을 높이는 것이 map타입
type Video = {
  title: string;
  author: string;
  description: string;
}

type Optional<T> = {
  [P in keyof T]?: T[P];
}
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
}
type VideoOptional = Optional<Video>;

type Animal = {
  name: string;
  age: number;
}
const animal: Optional<Animal> = {
  name: 'dog',
}
animal.name = 'jicheol';

const video: ReadOnly<Video> = {
  title: 'hi',
  author: 'jicheol',
  description: 'fuck',
} 
// video.title = 'hello'; // error

type Nullable<T> = {
  [P in keyof T]: T[P] | null
}
const obj3: Nullable<Video> = {
  title: null,
  author: null,
  description: null,
}

