/* String - Slice */

// var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quidem ratione pariatur recusandae, quod consequuntur quae molestiae a asperiores voluptas obcaecati fugiat accusamus corrupti debitis natus architecto dolores. Modi, consectetur!";
// var netice = text.slice(6, 56);
// console.log(netice);

/* Break */
// var number;
// var number2 = 10;

// for (number = 0; number < 20; number++) {
//     if(number === 14) {
//         continue;
//     }
//     console.log("Rəqəmim " + number);
// }

// while(number2 < 20) {
//     number2++;
//     if(number2 === 15) {
//         continue;
//     }
//     console.log("Rəqəmim " + number2);
// }


/* Birinci Function */
function salamlama(){
    console.log('Salam, Azerbaycan!');
}
/* İkinci Function */
function hesablama(firstNumber, secondNumber, process) {
    if(process == "+"){
        console.log(firstNumber + secondNumber)
    } else if(process == "-") {
        console.log(firstNumber - secondNumber)
    } else if(process == "/") {
        console.log(firstNumber / secondNumber)
    } else if(process == "*") {
        console.log(firstNumber * secondNumber)
    }
}

// hesablama(18, 10, "+");

function sifreniYoxla(password) {
    if(password == 123456) {
        console.log('Təbriklər! Daxil Oldunuz!')
    } else {
        console.log('Bir daha yoxlayın!')
    }
}

function sozuTap(soz, birinci, ikinci) {
    var netice = soz.slice(birinci, ikinci);
    console.log(netice);
}

// sozuTap('sajkfhasjkfhsajkfhjashfjkashfajksfhaksj hjksahfkj ash', 3, 24);


function log(text) {
    console.log(text)
}

function log(text) {
  var loglama = text;
  return loglama
}
