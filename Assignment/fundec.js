function percentageOfWorld1(population,country)
{
    let a = (population/7900)*100;
    return `The ${country} has ${population} million population and its percentage ${a}.`
}
let value1=percentageOfWorld1(6,"india");
let percentageOfWorld2=function(population,country)
{
    let a = (population/7900)*100;
    return `The ${country} has ${population} million population and its percentage ${a}.`
}
let value2=percentageOfWorld2(3,"srilanka")
console.log(value1,value2);