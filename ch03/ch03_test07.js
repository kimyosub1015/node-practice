//객체를 만들면서 동시에 속성을 초기화하도록 설계한다.
var Person = {
age : 26,
name : '김요섭',
add : function (a,b){
    return a+b;
    }
};

var result = Person.add(10,10);

console.log('Person.add 10 + 10 = '+Person.add(10,10));
console.log('result 10 + 10 = '+result);

console.log('Person의 타입 : '+typeof(Person));
console.log('age의 타입 : '+typeof(Person.age));
console.log('name의 타입 : '+typeof(Person.name));
console.log('add의 타입 : '+typeof(Person.add));

console.log('result의 타입 : '+typeof(result));