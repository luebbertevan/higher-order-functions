
type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User>;
/*
  Equivalent to:
  {
    id?: number;
    name?: string;
    email?: string;
  }
*/

const maybeUser: PartialUser = { name: "Evan" };

// 2️⃣  Required<T> — makes all properties required
type OptionalUser = { id?: number; name?: string };
type FullUser = Required<OptionalUser>;
/*
  {
    id: number;
    name: string;
  }
*/

// 3️⃣  Readonly<T> — makes all props readonly
type Config = {
  port: number;
  mode: string;
};

const appConfig: Readonly<Config> = { port: 3000, mode: "dev" };
// appConfig.port = 8080; //❌ Error: cannot assign to readonly property

// 4️⃣  Pick<T, K> — select specific keys from a type
type UserPreview = Pick<User, "id" | "name">;
/*
  {
    id: number;
    name: string;
  }
*/
const smallUser: UserPreview = { id: 1, name: "Evan" };

// 5️⃣  Omit<T, K> — remove specific keys from a type
type UserWithoutEmail = Omit<User, "email">;
/*
  {
    id: number;
    name: string;
  }
*/

// 6️⃣  Record<K, T> — creates an object with known key types
type StationStats = Record<string, { entries: number }>;
/*
  {
    [key: string]: { entries: number }
  }
*/
const stats: StationStats = {
  A: { entries: 5 },
  B: { entries: 10 },
};

// 7️⃣  ReturnType<T> — extract the return type of a function
function makeUser() {
  return { id: 1, name: "Evan" };
}
type MakeUserReturn = ReturnType<typeof makeUser>; // { id: number; name: string; }

// 8️⃣  Parameters<T> — extract the parameter types of a function
function add(a: number, b: number) {
  return a + b;
}
type AddParams = Parameters<typeof add>; // [number, number]
const args: AddParams = [1, 2];

// 9️⃣  ConstructorParameters<T> — parameters for a class constructor
class Person {
  constructor(public name: string, public age: number) {}
}
type PersonArgs = ConstructorParameters<typeof Person>; // [string, number]
const personArgs: PersonArgs = ["Evan", 25];

// 🔟  InstanceType<T> — the instance type of a class
type PersonInstance = InstanceType<typeof Person>; // Person
const person: PersonInstance = new Person("Evan", 25);

// 1️⃣1️⃣  Exclude<T, U> — remove types from a union
type Status = "active" | "inactive" | "archived";
type ActiveStatus = Exclude<Status, "archived">; // "active" | "inactive"

// 1️⃣2️⃣  Extract<T, U> — keep only overlapping types
type Allowed = Extract<Status, "active" | "archived">; // "active" | "archived"

// 1️⃣3️⃣  NonNullable<T> — removes null and undefined
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>; // string

// 1️⃣4️⃣  Awaited<T> — resolves the type inside a Promise
type UserPromise = Promise<User>;
type ResolvedUser = Awaited<UserPromise>; // User

// 1️⃣5️⃣  Record + keyof — dynamic type mapping
type AnimalCounts = Record<"cat" | "dog" | "bird", number>;
const animals: AnimalCounts = {
  cat: 5,
  dog: 2,
  bird: 1,
};

// 1️⃣6️⃣  infer — extract types from inside a structure
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

type Foo = () => number;
type FooReturn = ReturnTypeOf<Foo>; // number

// 1️⃣7️⃣  Combining utilities
type SafeUser = Readonly<Partial<User>>;
type CreateUserInput = Omit<User, "id">; // everything except ID
type UserLookup = Record<string, User>;  // object keyed by userId

// 1️⃣8️⃣  Visual: DeepPartial — recursively optional type
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type ComplexUser = {
  id: number;
  profile: {
    name: string;
    address: {
      city: string;
    };
  };
};

type LooseUser = DeepPartial<ComplexUser>;
/*
{
  id?: number;
  profile?: {
    name?: string;
    address?: {
      city?: string;
    }
  }
}
*/

const userPatch: LooseUser = {
  profile: { address: { city: "Paris" } },
};
