function f(x,y){
	var a = Array.prototype.slice.call(arguments,2);
	return console.log((x+y)*a.length);
};
f(1,2,"hi",true, 7);

