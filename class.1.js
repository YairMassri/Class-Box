// function Automobile(wheels){
//     this.wheels = wheels
//     this.setColor = ()=>{
//         this.color = color
//     }
//     this.setColor = ()=>{
//         return this.color
//     }
// }

// function Sedan(){
//     // you need 4 doors and 4 wheels
//         this.doors = 4
// }

// Sedan.prototype = new Automobile(4)

// const sedan = new Sedan()

// // console.log(sedan.doors)

// function Camry(make,model,year){
//     this.make = make
//     this.model = model
//     this.year = year
// }

// Camry.prototype = new Sedan('Toyota','Camry','1997')

// const camry = new Camry()

// console.log(camry.wheels)
// console.log(camry.doors)
// camry.year = 2010
// console.log(camry.year)

class Automobile{
constructor(wheels){
    this.wheels = wheels
}
setColor(color){
    this.color = color
    }
getColor(){
    return this.color
}
}

class Sedan extends Automobile{
    constructor(make,model,year){
        super(4)
        this.make = make
        this.model = model
        this.year = year
    }
}

const sedan = new Sedan()

class Maybach extends Sedan{
    constructor(color,doors){
    super('Mercedez','Maybach',2012)
    this.color = color
    this.doors = doors
    }
}

const maybach = new Maybach()

console.log(maybach.wheels)