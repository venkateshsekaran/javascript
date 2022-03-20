let dolphins=80;
let koalas=89;
if(dolphins>koalas && (dolphins<=100 && koalas<=100))
{
    console.log("dolphins wins");
}
else if(dolphins===koalas || (dolphins>=100 && koalas>=100))
{
    console.log("Draw");
}
else{
    console.log("koalas wins");
}