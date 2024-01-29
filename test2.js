var v = 1;
function callSomething(thing = something()){
	console.log(thing);
}
function something(){
	return v++;
}
callSomething();
callSomething();

