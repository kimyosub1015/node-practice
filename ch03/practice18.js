//prototype object
//프로토타입 객체로 만들 함수를 정의
function Person(name, age){
    this.name = name;
    this.age = age;
}
//프로토타입 선언
Person.prototype.walk = function(speed){
    console.log('시속'+speed+'km/h 속도로 이동 중');
}
//객체 생성
var person1 = new Person('김요섭',15);
var person2 = new Person('김두한',13);
var person3 = new Person('김기동',10);

console.log(person1.name+'의 이동 속도를 알려드립니다.')
person1.walk(15);//speed에 넘겨주는 값