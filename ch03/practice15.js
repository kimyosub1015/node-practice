// callback
// 함수를 호출했을 때 또 다른 함수를 파라미터로 전달하는 방법
function add(a,b,callback){
    var result = a+b;
    console.log(typeof(result));
    callback(result);
    //return result;
}
add(10,10,function(result){
    console.log("function callbacked from parameter")
    console.log("10 + 10 = "+result);
    console.log(typeof(result));
});
console.log(typeof(result));
//가장 큰 특징은 return이 없으나 함수 내부에서 선언한 변수를 바로 받아서 실행할 수 있다는 거다?
//왜냐면 아예 함수를 파라미터로 보내서 함수 내부의 변수를 불러오기 때문이다.
//물론 그 변수를 불러오려면 callback함수로 지정해야 한다.