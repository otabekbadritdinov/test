let budget = prompt("What is your budget?");
let name = prompt("The name of your shop?");

let mainList = {
	money: budget,
	shopName: name,
	shopGoods: [],
	employeers: {},
	open: false 
}

for (i = 0; i < 5; i++) {
	let a = prompt('What kind of goods do you want to sell?');
	if((typeof(a)) === 'string' && a != '' && a.length < 50) {
		alert('All right');
		mainList.shopGoods[i] = a;
	} else {
		alert('Please wright it correctly');
	}
}

alert(mainList.money / 30);


