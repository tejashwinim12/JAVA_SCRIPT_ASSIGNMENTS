var car=
{
    manufacturer: "Ferrari S.p.A.",
    model:"SF90 Spider",
    year: 2019,
    details:function()
    {
               console.log("the model of the car is  " +this.model+", it is manufactured by "+this.manufacturer+" and it was manufactured in the year "+this.year);
    }
}
car.name="Ferrari";
console.log(car.name);
console.log(car.details());