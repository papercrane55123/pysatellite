function setColor(color = 'rosybrown'){
	return console.log(color);
}
setColor('blue'); // blue
setColor(); // rosybrown
setColor(''); // ''
setColor(undefined); // rosybrown
setColor(null); // null
