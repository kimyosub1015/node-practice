var Person = {};

Person['age'] = 26;
Person['name'] = '김요섭';
Person.mobile = '010-0000-0000';

console.log('나이 : '+Person.age);
console.log('이름 : '+Person.name);
console.log('전화번호 : '+Person.mobile);

console.log('age의 Datatype : '+typeof(Person.age));
//Number
console.log('age의 Datatype : '+typeof(Person.name));
//String
console.log('age의 Datatype : '+typeof(Person.mobile));
//String