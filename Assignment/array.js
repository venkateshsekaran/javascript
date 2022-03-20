let population = [5,7,9,11]
console.log(population.includes(5));
console.log(population.includes(10));
let percentage = (a) =>
{
    z= (a/32)*100
    return z
}
let per = (a,b,c,d) =>
{
let s= percentage (a)
let t= percentage (b)
let u= percentage (c)
let v= percentage (d)
return [s,t,u,v]

}
console.log(per(population[0],population[1],population[2],population[3]));