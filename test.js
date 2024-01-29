// 가장 왼쪽 a먼저 값이 결정된 후 b 값이 결정된다.
function calcDefaultValue(a = 1, b = a == 1 ? 2 : 3){
	console.log(a,b);
}
calcDefaultValue(1)
calcDefaultValue(2)
calcDefaultValue(3,5)
