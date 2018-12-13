var Users = [{name:'소녀시대', age:22},{name:'걸스데이',age:21},{name:'EXID',age:20}];

console.log('Users : '+Users.length);
for(var i = 0;i<Users.length;i++){
    console.log(i+'번 요소 : '+Users[i].name);
}
console.log('\nforEach 구문 사용하기');
Users.forEach(function(item,index){
    console.log(index+'번 요소 : '+item.name);
    console.log(index+'번 요소 : '+item.age)
})