var isHotOutside = true;
var isWeekday = true;
var hasMoneyInPocket = false;

var costOfMilk = 3;
var moneyInWallet = 40;
var thirstLevel = 8;

let shouldBuyIceCream = isHotOutside && hasMoneyInPocket;
let willGoSwimming = isHotOutside && isWeekday;
let isAGoodDay = isHotOutside && hasMoneyInPocket && isWeekday;
let willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= costOfMilk * 2;

console.log (`shouldBuyIceCream: ${shouldBuyIceCream}`);
console.log (`willGoSwimming: ${willGoSwimming}`);
console.log (`isAGoodDay: ${isAGoodDay}`);
console.log (`willBuyMilk: ${willBuyMilk}`);
