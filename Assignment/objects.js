/*let mycountry=
{
 country:"india",
 capital:"delhi",
 language:["tamil","hindi","telugu"],
 population:50 ,
 neighbors:["srilanka","bangladesh","china"]
}
console.log(`'${mycountry.country} has ${mycountry.population} million ${mycountry.language[0]} speaking people,${mycountry.neighbors.length} neighbouring countries and a capital is ${mycountry.capital}'`);
mycountry.population=52;
console.log(mycountry);
mycountry['population']=50;

console.log(mycountry);*/
 let mycountry =
 {
    country:"india",
    capital:"delhi",
    language:["tamil","hindi","telugu"],
    population:50 ,
    neighbors:["srilanka","bangladesh","china"],
    island:false,
     describe :function ()
                {
                    console.log(`'${this.country} has ${this.population} million ${this.language[0]} speaking people,${this.neighbors.length} neighbouring countries and a capital is ${this.capital}'`);   
                },
        checkIsland:function ()
        {
        
         this.island ? console.log("there are no neighbouring countries") : console.log("there are");
        }

 }
 mycountry.describe();
 mycountry.checkIsland();
 
 