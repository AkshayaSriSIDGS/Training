//js object

let flight={
    airline: "indianair",
    flightId: 1234,
    totalseats: 200,
    destination:"delhi",
    origination:"bangalore",
    price:5000,
    departureTime:null,
    date:"20-01-2026"
}
console.log(flight);
console.log(JSON.stringify(flight));
console.log(flight.price);


//js Array


let passengers = [
    {
        name: "Anil Kumar",
        age: 30,
        passportNumber: "A1234567"
    },
    {
        name: "Sunil Kumar",
        age: 28,
        passportNumber: "B9876543"
    }
];

console.log("First Passenger Name: ", passengers[0].name);
console.log("Second Passenger Name: ", passengers[1].name);

for (let i = 0; i < passengers.length; i++) {
    console.log(`Passenger ${i + 1}: Name - ${passengers[i].name}, Age - ${passengers[i].age}, Passport Number - ${passengers[i].passportNumber}`);
}

for (let passenger of passengers) {
    console.log(`Passenger Name: ${passenger.name}, Age: ${passenger.age}, Passport Number: ${passenger.passportNumber}`);
}



//functions

let passenger = {
    name: "Ramesh Kumar",
    age: 35,
    passportNumber: "C4567890"
};

function printData(data){
    if(Array.isArray(data)){
        console.log("printing Array Data")
        for(let d of data){
            console.log(d);
        }
    }else{
        console.log("printing Single Passenger Data")
        console.log(data);
    }
}


printData(passengers);
printData(passenger);


//simple calculator

a=10;
b=5;
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a>b?a-b:b-a;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
let addition=add(a,b);
let substraction=sub(a,b);
console.log(`The addition of ${a} and ${b} is ${addition}`);
console.log(`The substraction of ${a} and ${b} is ${substraction}`);
console.log(`The Multiplication of ${a} and ${b} is ${mul(a,b)}`);
console.log(`The Division of ${a} and ${b} is ${div(a,b)}`);

//exception handling

function div(a,b){
    if(b==0){
        throw new Error("cant divide with 0");
    }
    return a/b;
}

try{
    let result=div(10,0);
}catch(error){
    console.error(error.message);
}finally{
    console.log("executed");
}