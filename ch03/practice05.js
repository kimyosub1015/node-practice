//객체 내 속성으로 들어간 함수
//Person 객체 내에 add변수라는 이름으로 익명함수가 선언되어 들어갔다.
//이때는 익명함수 형태로 선언 가능하다.
//그러니 그냥 익명함수만 써야 하나? 객체의 변수에 함수를 할당할수 있다. 이거는 test6으로!
var Person = {};
Person['age'] = 26;
Person['name'] = '김요섭';
Person.add = function (a,b){
    return a+b;
};

var result = Person.add(10,10);

console.log('Person.add 10 + 10 = '+Person.add(10,10));
console.log('result 10 + 10 = '+result);

console.log('Person의 타입 : '+typeof(Person));
console.log('age의 타입 : '+typeof(Person.age));
console.log('name의 타입 : '+typeof(Person.name));
console.log('add의 타입 : '+typeof(Person.add));

console.log('result의 타입 : '+typeof(result));