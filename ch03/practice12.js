// POP, PUSH
var i = 0;
var Users = [{name:'A', age:22},{name:'B',age:21},{name:'C',age:20}];
console.log('after length : '+Users.length);
for(i=0;i<Users.length;i++){
    console.log(Users[i].name);
}
Users.shift();
console.log('unshift length : '+Users.length);
for(i=0;i<Users.length;i++){
    console.log(Users[i].name);
}
Users.unshift({name:'D',age:21});
console.log('shift length : '+Users.length);
for(i=0;i<Users.length;i++){
    console.log(Users[i].name);
}
