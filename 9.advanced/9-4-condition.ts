// 타입에 삼항 연산자로 조건을 걸어 타입을 결정할 수 있음
type Check<T> = T extends string? boolean : number;
type Type = Check<string>; // boolean

type TypeName<T> = T extends string? 'string'
: T extends number ? 'number'
: T extends boolean ? 'boolean'
: T extends undefined ? 'undefined'
: T extends Function ? 'function'
: 'object';

type T0 = TypeName<string>;
type T1 = TypeName<'a'>;
type T2 = TypeName<() => void>;

