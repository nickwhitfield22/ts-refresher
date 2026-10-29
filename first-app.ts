let username = "nick";

let age = 15;

let isValid = true;

// string, number, boolean

let userID: string | number = "abc1";
userID = 123;
// userID = true

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  name: "Max",
  age: 25,
  isAdmin: true,
  id: 123,
};

// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

//{name: string; age: number}[]

hobbies = ["Sports", "Cooking", "Reading", "Writing"];
//hobbies = [1, 2, 3];

function add(a: number, b: number) {
  const result = a + b;
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 3, add);

//popular way for defining object types
interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@example.com",
};

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ["login"],
//   userName: "admin123",
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "admin123",
};

type Role = "admin" | "user" | "editor";

let role: Role;
role = "admin";
role = "user";
role = "editor";

function performAction(action: string, role: Role) {
  if (role == "admin" && typeof action == "string") {
    // ...
  }
}

let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge({ name: "nick" }, { age: 15 });
