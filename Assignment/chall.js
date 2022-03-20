let bill=[230,320,100,21]
let caltip = bill =>
{
    if (bill>50 & bill<300)
    return 0.2*bill
    else 
    return 0.3*bill
}
let total = (s,t,u,v) =>
{
    let e = [caltip(s),caltip(t),caltip(u),caltip(v)];
    console.log(bill);
    console.log(e);
    let total1= [];
    for (let i=0;i<bill.length;i++)
    {   
         total1[i]= bill[i] + e[i];
        
    }
    console.log(bill,e,total1);
    return [total1]
    
}
console.log(total(bill[0],bill[1],bill[2],bill[3]));