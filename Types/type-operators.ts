const user = { name: "Evan", age: 25 };

type Lad = {
	name: string;
	age: number;
	alive: boolean;
};
type Userboy = typeof user;

type Keys = keyof Userboy;

type Copy<T> = {
	[K in keyof T]: T[K];
};

type ReadonlyCopy<T> = {
	readonly [K in keyof T]: T[K];
};

type PartialCopy<T> = {
	[K in keyof T]?: T[K];
};

type CopiedPerson = Copy<Lad>;
type Test = ReadonlyCopy<Lad>;
type Optional = PartialCopy<Lad>;

//extends As a constraint for generics
function getProp<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}
// K extends keyof T says:
// “K can only be a key of T.”
//getProp(user, "height"); // Error: 'height' is not a key of user

//extends As a conditional type:
type IsString<T> = T extends string ? true : false;
type A = IsString<"hi">; // true
type B = IsString<42>; // false

//literal values can also be types.
type X = 42;
//42 here is a type, not a runtime value.
//A variable of type 42 can only ever hold the number 42:

//infer R captures whatever the function returns.
//(...args: any[]) → Represents a function type with any number of arguments of any type.
type ReturnTyper<T> = T extends (...args: any[]) => infer R ? R : never;

type Food = () => number;
type Result = ReturnTyper<Food>; // number

type FirstArg<T> = T extends (arg1: infer P, ...args: any[]) => any ? P : never;

type F = (x: string, y: number) => void;
type Arg0 = FirstArg<F>; // string
