let percentageOfWorld1 = population =>
{
    return (population/7900)*100
}
let fun = (population,country) =>
{
    let a= percentageOfWorld1(population);
    return `The ${country} has ${population} million population and its percentage about ${a}.`
}
console.log(fun(6,"india"));