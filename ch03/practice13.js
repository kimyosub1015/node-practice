// SPLICE
var i = 0;
var Users = [{name:'A', age:22},{name:'B',age:21},{name:'C',age:20}];
console.log('after length : '+Users.length);
for(i=0;i<Users.length;i++){
    console.log(Users[i].name);
}
delete Users[1];

console.log('delete length : '+Users.length);
/*
for(i=0;i<Users.length;i++){
    console.log(Users[i].name);
}
*/
// 이럴 경우 Users[1]의 모든 값은 undefined가 되므로 에러가 발생한다.
console.dir(Users);
Users.splice(1,0,{name:'BX',age:21});
console.log('splice length : '+Users.length);
/*
for(i=0;i<Users.length;i++){
    console.log(Users[i].name);
}*/
console.dir(Users);
Users.splice(2,1);
console.log('splice length : '+Users.length);
console.dir(Users);
