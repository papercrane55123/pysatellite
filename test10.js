class Food{
	constructor(name){
		this.name = name;
		this.brands = [];
	}
	addBrand(brand){
		this.brands.push(brand);
	}
	print(){
		console.log(`${this.name} 을/를 파는 음식점들 :`)
		console.log(this.brands.join(', '));
	}
}

const pizza = new Food('pizza');
pizza.addBrand('pizzahut');
pizza.addBrand('domino');

const checken = new Food('checken');
checken.addBrand('bhc');
checken.addBrand('goobne');


pizza.print();
checken.print();

