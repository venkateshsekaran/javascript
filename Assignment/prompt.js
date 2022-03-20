const numneighbors= Number(prompt("How many neighbors does your country have?"))
console.log(numneighbors);
if (numneighbors===1)
{
    console.log("only 1 border");
    console.log(typeof numneighbors);
}
else if (numneighbors > 1)
{
    console.log("More than 1 border");
}
else 
{
    console.log("No border");
}