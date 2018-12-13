var Users = [{name:'소녀시대', age:22},{name:'걸스데이',age:24}];

var add = function(a,b){
    return a+b;
};
Users.push(add);
console.log('Users count : '+Users.length);
console.log('Push to '+Users[2](10,10));

console.log(typeof(Users)); // 객체
console.log(typeof(Users[0])); // 객체
console.log(typeof(Users[0][1])); // 선언안됨
console.log(typeof(Users[0].name)); // 문자열
console.log(typeof(Users[0].age)); // 정수
console.log(typeof(Users[2])); // 함수
console.log(typeof(Users[2].name)); // 문자열(add)
console.log(typeof(Users[2].age)); // 선언안됨
console.log(Users[0].name);
console.log(Users[1].name);
console.log(Users[2].name);
console.log(Users[2](10,10));