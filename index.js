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

console.log (shouldBuyIceCream);
console.log (willGoSwimming);
console.log (isAGoodDay);
console.log (willBuyMilk);
