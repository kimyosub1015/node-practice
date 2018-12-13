// callback
// 함수안에서 값을 반환할 때 새로운 함수를 만들어 반환하는 방법
function add(a,b,callback){
    var result = a+b;
    callback(result);
    
    var count = 0;
    var history = function(){
        count++;
        console.log('count 수 : '+count);
        //console.log(typeof(result));
        //console.log(result);
        return a + '+' + b + '=' + result;
        
    };
    return history;
}

var add_history = add(10,10,function(result){
    console.log('파라미터로 전달된 콜백 함수 호출')
    console.log('10 + 10 = '+result);
});

console.log('결과 값으로 받은 함수 실행 결과 : '+add_history());
console.log('결과 값으로 받은 함수 실행 결과 : '+add_history());
console.log('결과 값으로 받은 함수 실행 결과 : '+add_history());
console.log('add_history : '+typeof(add_history));
console.log('add : '+typeof(add));
//함수를 실행했는데 다른 함수를 반환받으면 반환바든 함수를 그대로 실행할 수 있다고 한다.
//그래서 add_history를 그대로 출력할 경우 add가 실행되는 것이다?
//여기서 add 함수 내부에 result라는 값을 callback으로 지정했는데
//result는 history함수에 있으니 실질적으로 history함수를 불러오는거나 다름이 없는건가?
//history 함수에는 return값이 존재하는데 이때 형태가 a+b=result이므로 이런 형태를 출력하도록 만들어진 거다.
//근데 어차피 add함수도 결과적으로는 history를 리턴하는거니... 흐음... 뭐 결과적으로 함수 내 함수에서 리턴한걸 다시 함수에서 리턴한거니까
//add 함수를 실행했는데 다른 함수인 history를 그대로 실행할 수 있다는 거다.