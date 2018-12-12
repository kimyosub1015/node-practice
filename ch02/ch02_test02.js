//프로세스 객체는 무엇인가?
var x = process.argv.length;
console.log('argv 속성의 파라미터 수 : '+x);
console.dir(process.argv);
//argv는 프로세스를 실행할 때 전달되는 파라미터(매개변수)의 정보로 이 줄까지는 2개가 실행된다.
//(기본 nodejs 실행하고 이 코드를 실행하는 프로세스가 해당)

//세번째 프로세스 파라미터가 있으면 그걸 표시한다.
if(process.argv.length>2){
    console.log('세번째 파라미터의 값 : '+process.argv[2])
}
//그냥 실행하면 두개만 나오니 터미널이나 cmd에서 node ch02_test2.js __port(포트번호)로 새로운 프로세스를 생성하자.
process.argv.forEach(function(item,index){
    console.log(index+':',item);
});