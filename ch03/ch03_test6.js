
var Person = {};
Person['age'] = 26;
Person['name'] = '김요섭';


function oper(a,b){
    return a+b;
};
//변수에다 함수를 선언
Person['add'] = oper;
//이후 객체의 변수를 하나 선언해서 함수를 선언했던 변수에 대입함을 정의
//var result = Person.add(10,10);

console.log('Person.add 10 + 10 = '+Person.add(10,10));
//console.log('result 10 + 10 = '+result);

console.log('Person의 타입 : '+typeof(Person));
console.log('age의 타입 : '+typeof(Person.age));
console.log('name의 타입 : '+typeof(Person.name));
console.log('add의 타입 : '+typeof(Person.add));

console.log('oper의 타입 : '+typeof(oper));