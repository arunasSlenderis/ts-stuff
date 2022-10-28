"use strict";
// More specific vs more loose type
let s = 's';
let d = 'd';
d = s;
s = d;
// More specific type can fit into more loose type, but not vice versa.
// Like you can fit through wider door, but cannot fit through smaller door not matter that its still a door.
// ======================================================================
// Unknown type
// kazkada refactorinsiu
let something = (a) => {
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
    }
    catch (e) {
        return e.message;
        // if (e instanceof Error) {
        //   return e.message;
        // }
    }
};
const gen = '';
class ColorValue {
    constructor(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}
const c = { red: 1, green: 3, blue: 5, alpha: 0.2 };
const cc = { red: 1, green: 3, blue: 5, alpha: 0.2 };
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
];
data.reduce((obj, item) => {
    if (!obj[item])
        obj[item] = 0;
    obj[item]++;
    return obj;
}, {});
const obj = {
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
const getDeepValue = (obj, nestedObj, key) => {
    return obj[nestedObj][key];
};
const result = getDeepValue(user, 'address', 'houseNo');
const performAction = (...args) => {
    console.log(args);
};
performAction('login', 'dude123', 'password');
performAction('logout', 'dude123', 'yo'); // should show error
const func = (a, b) => {
    if (a === 1)
        return 'No';
    return a + b;
};
// We are checking if its a function
// and has arguments if yes then infer return type from its logic
// if not then its not even a function su we cannot use it - never
// This could be useful if we have function that returns complicated types
// and we still need to know what they are without digging into code
// ===================================================================
