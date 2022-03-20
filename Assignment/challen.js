let wood_1 ={
    name:"wood",
    height: 1.7,
    weight: 63,
    bmi: function()
    {
        return this.weight/(this.height^2);
    }

}
let john ={
    name:"john",
    height: 1.5,
    weight: 60,
    bmi: function()
    {
        return this.weight/(this.height^2);
    }

}
john.bmi()>wood_1.bmi() ? console.log(`${john.name} BMI is higher than ${wood_1.name}`) : console.log(`${wood_1.name} BMI is higher than ${john.name}`);