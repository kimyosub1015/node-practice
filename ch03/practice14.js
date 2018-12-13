// slice
var i = 0;
var Users = [{name:'A', age:22},{name:'B',age:21},{name:'C',age:20},{name:'D',age:21}];
console.log('배열 요소의 수 : '+Users.length);
console.log("Users");
console.dir(Users);

var Users2 = Users.slice(0,2);
console.log("Users2");
console.dir(Users2);

var Users3 = Users2.slice(1);
console.log("Users3");
console.dir(Users3);