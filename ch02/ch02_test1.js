var result = 0;
console.time('duration_sum');

for(var i = 1;i<=1000;i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('합 : %d',result);

console.log('현재 실행한 파일 이름 : '+__filename);
console.log('현재 실행한 파일 위치 : '+__dirname);