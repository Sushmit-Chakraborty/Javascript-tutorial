const user = {};

user.name = 'John';
user.surname = 'Smith';

console.log(user);

user.name = 'Pete';
delete user.name;
console.log(user);