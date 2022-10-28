// More specific vs more loose type

let s: 's' = 's';

let d = 'd';

d = s;
s = d;

// More specific type can fit into more loose type, but not vice versa.
// Like you can fit through wider door, but cannot fit through smaller door not matter that its still a door.
// ======================================================================

// Unknown type
// kazkada refactorinsiu
let something = (a: unknown) => {
  // @ts-ignore
  return a[1];
};

// Its a good practice to mark type as unknown if we want to use as a placeholder until we are back for fixing
// This way we will know exact place where we need to make types for.
// any does not show any errors
// =====================================================

// Handle error righteously

const getSmth = () => {
  try {
    // something throws error while getting something
    throw new Error('Fail');
  } catch (e) {
    return e.message;
    // if (e instanceof Error) {
    //   return e.message;
    // }
  }
};

// we could make error as any, but we loose teh suggestions
// we could use as keyword, but we just assuming it and this is not always the case
// Checking the instance is safest way
// Of course sometimes we might need to turn into other alternatives depending on situation.
// ========================================================

// Remove from union
type Letters = 'a' | 'b' | 'c';

type RemoveC<T> = T extends 'c' ? never : T;

type WithoutC = RemoveC<Letters>;

// Extends keyword means sort of an equal. never type means this cannot happen.
// So in this case we are checking if passed type is equal to 'c'
// if it is we are saying the it should never be that, so ts ignores it otherwise we are returning the same input type
// =================================================================================

// Union with some suggestions, but not preventing to add other values of the specified type

type Gender = 'female' | 'male' | Omit<string, 'female' | 'male'>;

const gen: Gender = '';

// Special keyword Omit, omits value from type. A string type is all possible string values.
// Knowing that we need to remove those 2 types from type and we are ending up with string without these values

// =======================================================================

// class properties assignment

type Color = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};
class ColorValue implements Color {
  constructor(
    public red: number,
    public green: number,
    public blue: number,
    public alpha: number
  ) {}
}

// With ts we have a shorthand from declaring class properties by writing its restriction (public, protected, private)

// Overriding type

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

type ColorOptionalAlpha = Override<Color, { alpha?: number }>;

const c: ColorOptionalAlpha = { red: 1, green: 3, blue: 5, alpha: 0.2 };
const cc: Color = { red: 1, green: 3, blue: 5, alpha: 0.2 };

// A handy trick to override a type.
// This could happen if we are using types from some libraries and we just want to change a minor thing, but all other this are good.
// ====================================================================================

// Make types from array

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'pogostick',
] as const;

// type DataType = { [key in typeof data[number]]: number };
type DataType = Record<typeof data[number], number>;

type DataUnion = keyof DataType;

data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {} as DataType);

const obj: Record<string, string> = {
  id: '1',
  text: 'test',
  name: 'Dude',
  pc: 'yes',
};

obj.description = 'yo';

// as const makes array readonly, so we cannot add values there
// Record type means that we are creating object with key and value types
// With this type we can make object more loose, for example
// ============================================================================

// type-guarding function parameters

const user = {
  id: 1,
  name: 'John',
  address: {
    street: 'Main st.',
    houseNo: 5,
  },
  company: {
    name: 'The company',
  },
};

const getDeepValue = <
  Obj,
  NestedObj extends keyof Obj,
  Key extends keyof Obj[NestedObj]
>(
  obj: Obj,
  nestedObj: NestedObj,
  key: Key
): Obj[NestedObj][Key] => {
  return obj[nestedObj][key];
};

const result = getDeepValue(user, 'address', 'houseNo');

// We can get suggestion of all objects and their values and this greatly reduces dev time and error count
// =======================================================================

// Optional and required params according to first param

type Actions = 'login' | 'logout';
const performAction = <Type extends Actions>(
  ...args: Extract<Actions, Type> extends 'login'
    ? [type: Type, username: string, password: string]
    : [type: Type, username: string]
) => {
  console.log(args);
};

performAction('login', 'dude123', 'password');
performAction('logout', 'dude123', 'yo'); // should show error

// Extract keywords, well extracts a value from a type.
// First we are saying that we gonna pass some type as Type and it should be equal to Actions type
// The we are saying that function will have arguments.
// The we extracting passed type from Actions and checking if it equals to 'login
// If it is then we are specifying arguments, that first argument name is `type` and should be equal to Type
// second is username and its a string and third is password also a string
// the 'else' condition says that we should only pass two arguments

// Its useful when we want to have some generic function, but we still need some type guarding or params we pass.
// As it we just specify password as optional, when user logs in we technically can have a bug there and it could take time for dev to find it.
// =================================================================

// Inferring types

type RType<T> = T extends (...args: any[]) => infer R ? R : never;

const func = <RType>(a: number, b: number) => {
  if (a === 1) return 'No';
  return a + b;
};

// We are checking if its a function
// and has arguments if yes then infer return type from its logic
// if not then its not even a function su we cannot use it - never
// This could be useful if we have function that returns complicated types
// and we still need to know what they are without digging into code
// ===================================================================
