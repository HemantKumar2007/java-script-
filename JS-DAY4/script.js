let user = {
    fullname : "hemant",
    add : "ptaudi",
    favclr : ["white" ,"grn","blue" ]

}
console.log(user.fullname)
console.log(user.add)
console.log(user.favclr)
console.log(user.favclr[1])
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.enteries(user))



let date = new Date()
console.log(date)



 const car = {
    name : "ford",
    model : "mustang",
    year : 1969
 }
 //Object.freeze(car)
 car.name = "toyota"
 car.color = "red"
 console.log(car.name)
 console.log(car)