let percentageOfWorld1=(population,country) =>
{
    let a = (population/7900)*100;
    return `The ${country} has ${population} million population and its percentage ${a}.`
}
console.log(percentageOfWorld1(6,"india")); 