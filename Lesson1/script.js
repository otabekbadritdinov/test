let budget = prompt("What is your budget?");
let name = prompt("The name of your shop?");

let mainList = {
	money: budget,
	shopName: name,
	shopGoods: [],
	employeers: {},
	open: false 
}

mainList.shopGoods[0] = prompt('What kind of goods do you want to sell?');
mainList.shopGoods[1] = prompt('What kind of goods do you want to seel?');
mainList.shopGoods[2] = prompt('What kind of goods do you want to sell?');

alert(mainList.money / 30);


