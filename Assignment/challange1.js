let average = (d1,d2,d3) =>
{
    
    return (d1+d2+d3)/3;
}
let checkwinner = (d1,d2,d3,k1,k2,k3) =>
{
    let a = average(d1,d2,d3);
    let b = average(k1,k2,k3);
    if (a>b)
    {
        return `Dolphin wins [${a} vs ${b}]`
    }
    else
    return `Koalas  wins [${b} vs ${a}]`
}
console.log(checkwinner(55,67,39,45,71,31));