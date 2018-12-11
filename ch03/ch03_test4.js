var add = function (a,b){
    return a+b;
};
//이때 변수에 함수를 선언해줬지만 변수 이름만 생길 뿐 함수 이름은 없으니 익명함수가 된다.
var result = add(10,10);
console.log('10 + 10 = '+result);

console.log('add의 타입 : '+typeof(add));