RaphBill = [140, 45, 270];

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


function tipCalculator(bill) {
    let percentage; 
    if (bill < 50) {
        percentage = 0.2;
    } else if(bill >= 50 && bill < 200.) {
        percentage = 0.15;

    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}

const bill = [140, 45, 270]; 
const billTip = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])] ;

const billTotal = [ tipCalculator(bill[0]) + bill[0], tipCalculator(bill[1]) + bill[1], tipCalculator(bill[2]) + bill[2]]; 



