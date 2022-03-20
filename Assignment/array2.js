let neighbors = ["srilanka","pakistan","bangladesh"]
neighbors.push("china")
console.log(neighbors);
neighbors.shift()
console.log(neighbors);
if (neighbors.includes("germany"))
{
    console.log("Probably Asian country");
}
else
{
    console.log("propably not asian country");
}
neighbors[1] = "pakistani"
let new1= neighbors
console.log(new1);