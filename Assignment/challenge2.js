let bill = [108,405,302,408,150,276]
let calctip= bill =>
{
    if (bill<250)
    return 0.2*bill;
    else
    return 0.3*bill;
}
let total=[];
let tip=[]
for(i=0;i<bill.length;i++)
{
    tip[i]=calctip(bill[i])
    total[i]=bill[i]+calctip(bill[i])
    
}
bill.push(309);
console.log(bill);
console.log(tip);
console.log(total);
