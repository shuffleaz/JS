// var letter = 35;
// var ismayil = 14;
// if(ismayil >= 16){
//     console.log('salam necesen')
// } else(console.log('the file didnt find'))



// var example = 0;
// while(example < 10){
//     console.log('salam necesen')
//     example++;
// }

// var hiller = 400;
// if(hiller == 200){
//     console.log('cavab 200 olacaqdir')
// } else if (hiller == 500){
//     console.log('salam necesen')
// }
//  else {
//     console.log('bu yanlisdir')
// } 

// var hesab = 20;
// if(hesab <= 10 || hesab == 20){
//     console.log('javascript')
    
// }   else if (hesab == 0){
//     console.log('this is not correct information')
// } else{
//     console.log('salam xos gelimisiniz')
// }
// var text = "";
// var i = 0;
// while (i < 5) {
//   text += "<br>The number is " + i;
//   i++;
// }

// var text = "";
// var i = 0;
// while(i < 5) {
//     console.log(text += 'the number is zero');
//     i++;
// }

// var kuller = 14;
// if(kuller == 15 && kuller == 14){
//     console.log('salam necesen');
// } else{
//     console.log('bu duzgun variantdir');
// }
// var yasheddi = 19;
// var yas = 10;
// while(yas < yasheddi){
//     console.log('sizin yasiniz cox kicikdir');
// }

// var d = ['nicat', 'eldeniz', 'gunduz', 'meherrem', 'rauf', 'nihad', 'yaqub', 'ceyhun'];

// for(var g = 0; g < d.length; g++){
//     console.log('salam necesen ' + d[g]);
// }

// var f = 0;
// var t = 10;
// while(f < t){
//     console.log('This is My purpose to learn javascropt programming language' + f);
//     f++;
// }
// var u = 5;
// var j = 10
// while(u < j){

    
//     console.log('biz oyrenmeye cehd edirik' + u);
//     u++;
// }

// var getter = 25;
// var five = 10;
// while(five < getter){
//     console.log('this is for training in javascript' + five)
//     five++;
// }

// //string
// var filterOne = 'salam azerbaycan respublikasinin vetendaslari ve diger qonaqlar xos geldiniz';
// var filterTwo = filterOne.indexOf('vetendaslari');
// if(filterTwo === -1) {
//     console.log('Bu yazi metnde movcud deyil');
// } else{
//     console.log('bu yazi metnde movcuddur');
// }

//
// var birinciMisal = 'Salam Azerbaycan Respublikasinin Vetendaslari Xos gorduk Sizleri';
// var ikinciMisal = birinciMisal.indexOf('Sizleri');
// console.log(ikinciMisal);
// if(ikinciMisal === -1){
//     console.log('bu yazi metnde movcud deyil');
// }else{
//     console.log('Beli bu yazi metnde movcuddur');
// }
// var litter = 36;
// if(!isNaN(litter)){
//     console.log('dogrudur')
// }

// function salamlama(){
//     console.log('Salam, Azerbaycan!');
// }
// salamlama('salam azerbaycan');
// //sorus niye salamlama sonradan qeyd etdikden sonra isleyir struktur bele olmalidir
// function kesmeBir(kesmeİki, kesmeUc, kesmeDord){
//     console.log(kesmeİki + kesmeUc / kesmeDord)
// }
// kesmeBir(25, 50, 100);

// var letterOne = 'Salam Azerbaycan Respublikasinin numayendeleri ve diger olkenin numayendeleri';
// var letterTwo = letterOne.indexOf('Salam');
// if(letterTwo === -1){
//     console.log('bu soz metnde movcud deyil');
// }else{
//     console.log('diger');
// }
// console.log(letterTwo + letterOne);

function findIndex(text, word){
    //text - mətn
    //word - text daxilində axtarmaq istədiyimiz söz

    //Nəticə
    var result = text.indexOf(word);
    if(result === -1){
        console.log('bu yazi metnde movcud deyil')
    }else{
        console.log(result);
    }
}


// findIndex('Dunya Tarixinin en boyuk sexsiyyeti Sah Ismayil Xetaidir','boyuk2');

// findIndex('Azerbaycan Respublika', 'Res');

// fisrtLine('Dunya Tarixinin en boyuk sexsiyyeti Sah Ismayil Xetaidir')



// function opOne(){
//     var opTwo = 20;
//     var opThree = 30;
//     if (opTwo < opThree){
//         console.log('reqem duzgundur');
//     } else if(opTwo <= opThree){
//         console.log('reqem beraberdir')
//     } else{
//         console.log('reqem duzgun deyil')
//     }
// }

// opOne();

function reqemBir(first, second, process){
    //Müqayisə Operatorları
    // !, <, >, =
    
    if(process == '!') {
        // !=
        if(first != second) {
            console.log('Bərabər deyil!')
        }

    } else if(process == '<') {
        // <
        if(first < second) {
            console.log('Kiçikdir!')
        } else {
            console.log('Kiçik deyil!')
        }
    } else if(process == '>') {
        // >
        if(first > second) {
            console.log('Böyükdür!')
        } else {
            console.log('Böyük deyil!')
        }

    } else if(process == '='){
        // ==
        if(first == second) {
            console.log('Bərabərdir!')
        } else {
            console.log('Bərabər deyil!')
        }
    }
}

reqemBir(10, 12, '>');

//     if(compareOne <= compareTwo){
//         console.log('kicik deyil');
//     } else if(compareOne == compareTwo){
//         console.log('Beraber deyil')
//     } else if(compareOne > compareTwo){
//         console.log('Boyukdur')
//     }
//      else {
//         console.log('50 25-den boyuk hesab olunur')
//     }
// }

// sorus muqayise operator novunu
// sorus muqayise operatorlar nece qeyd edilir























