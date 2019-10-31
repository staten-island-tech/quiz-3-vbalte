/* //RaphBill = [140, 45, 270];

// const map1 = RaphBill.map(x => x * 0.20); //20 percent when les than 50

/* let tip20 = function {RaphBill[1] * 0.2};

let tip15 = function {RaphBill[0] * 0.15};

let tip10 = function {RaphBill[2] * 0.10};  */

/* const (RaphBill[1] * 0.20) ; */


/* if (RaphBill < 50) {
    console.log(`${RaphBill[1] * 0.20} is the tip for the bill`);
} else if (RaphBill > 50, RaphBill < 200 ) {
    console.log(`${RaphBill[0] * 0.15} is the tip for the bill`);
} else if (`${RaphBill[2] * 0.10} is the tip for the bill` );

let Tips = [0.15,0.2,0.10]; */

/////QUIZ THREE 

/* function printArray(someArray, message) {
    console.log(`${someArray} ${message}`);
}
//array for bills
const bill = [140, 45, 270]; 
printArray(bill, 'this array shows the bill without tip');

//this function gives you the total tip for a bill
function tipCalculator(bill) {
    let percentage;
    if (bill < 0) {
        throw new Error('Bill must be a positive number!!!');
    }
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill <= 200.) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
} 

//bill tip 
const billTip = bill.map(val => tipCalculator(val));
printArray(billTip, `this array shows the tip`); 

//bill total, functional programming 
const billTotal = bill.map(val => {
    const index = bill.indexOf(val);
    return val + billTip[index]; 
}); 
printArray(billTotal, `this array shows the total bill with tip`); 

//over 100
var copyArray = billTotal.filter(value => value >= 100);
printArray(copyArray, `this array shows the total bill value over $100`);  */ 


const Dejon = {
 fullName : `Dejon kurti`,
 mass : 110,
 height : 1.95,
 getBMI : function() {
    return this.mass / (this.height * this.height);
}
}

const Rob = {
    fullName : `Robert Grande`,
    mass : 78,
    height : 1.69,
    getBMI : function() {
        return this.mass / (this.height * this.height);
    }
}



/* getBMIRob : function(Rob) {
    return this.mass / (this.mass * this.mass);
} */


console.log(Rob.getBMI()); 
console.log(Dejon.getBMI()); 

if (Rob.getBMI() > Dejon.getBMI()) {
    console.log(Rob.fullName + `has the greater BMI of` + Rob.getBMI );
} else if (Dejon.getBMI() > Rob.getBMI()) {
    console.log(Dejon.fullName + `has the greater BMI` + Dejon.getBMI); 
} else {
    console.log(`They have the same BMI`)
}



