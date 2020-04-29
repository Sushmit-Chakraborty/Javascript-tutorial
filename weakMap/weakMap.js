let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "122");

john = null;

let result = weakMap.get(john);
console.log(result);