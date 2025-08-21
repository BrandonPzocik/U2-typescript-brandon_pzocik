function identity<T>(arg: T): T {
  return arg;
}

let num = identity<number>(42);
console.log(num);

let str = identity<string>("Hola mundo");
console.log(str);

let bool = identity<boolean>(true);
console.log(bool);
