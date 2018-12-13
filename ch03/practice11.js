// POP, PUSH
var i = 0;
var Users = [{name:'A', age:22},{name:'B',age:21},{name:'C',age:20}];
console.log('after length : '+Users.length);
for(i=0;i<Users.length;i++){
    console.log(Users[i].name);
}
Users.push({name:'D',age:21});
console.log('push length : '+Users.length);
for(i=0;i<Users.length;i++){
    console.log(Users[i].name);
}
Users.pop();
console.log('pop length : '+Users.length);
for(i=0;i<Users.length;i++){
    console.log(Users[i].name);
}