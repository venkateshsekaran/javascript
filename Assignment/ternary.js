let bill=420;
((bill>50) && (bill<300)) ?  x=20 :  x=30
let tip=(bill*x)/100;
let total= bill + tip;
console.log(`Your bill is ${bill},and tip is ${tip}.finally total amount is ${total}`);