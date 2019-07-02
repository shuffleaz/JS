// var number = 5;
// var number2 = 10;

// if(number < number2) {
//     console.log('Dəyər: ' + number);
//     number++;
//     console.log('Dəyər: ' + number);
// }

// while(number < number2) {
//     number++; // 10
//     console.log(number); //5dəfə konsol log işlədi
// }

/* Numbers - Rəqəmlər */
// var name = "Agshin";
// console.log('Mənim adım ' + name);

var numberOne = "19";
var numberTwo = 90;
var netice = numberOne + numberTwo;
var neticeninTipi = typeof(netice); // Nəticənin tipini öyrənmək (string, number, boolean)

var qaliq = 9;
var round = Math.round(qaliq); // Qalıq hansına yaxındırsa ona yuvarla
var floor = Math.floor(qaliq); // Alta yuvarla
var ceil = Math.ceil(qaliq); // Üstə yuvarla
var max = Math.max(19,80,5,23); // Maksimum dəyəri seç
var min = Math.min(19,80,5,23); // Minimum dəyəri seç
var PI = Math.PI; // Pi Sayısı

/* NaN - Not A Number - Bu Rəqəm Deyil */

var deyer = 1990;

/* NaN - negativ elementdi. */
/* ! - pozitivliyi negativ eləmək üçün istifadə olunur */

// if(isNaN(deyer)) {
//     console.log(deyer +' rəqəm deyil!')
// } else {
//     console.log(deyer +' rəqəmdir!')
// }


// let status = false;
// if(status === false) {
//     console.log(status);
//     console.log('Bərabərdir!')
// } else {
//     console.log(status);
//     console.log('Bərabər deyil!')
// }

// let status2 = false;
// if(!status2) {
//     console.log(status2);
//     console.log('Bərabərdir!')
// } else {
//     console.log(status2);
//     console.log('Bərabər deyil!')
// }


/* String - Mətn */
var text = "Salam, 'Azərbaycan'!" //Alternativ 1
var text = "Salam, \"Azərbaycan\"!" //Alternativ 2
var olke = "Azərbaycan!";
var salamOlkeText = "Salam " + olke;
var yazininUzunlugu = salamOlkeText.length;

var uzunText = "Salam, Azərbaycan Respublikası Vətəndaşları və digərləri!"

var uzunTextYoxla = uzunText.indexOf('Salam1');

var uppercase = uzunText.toUpperCase();
var lowercase = uzunText.toLowerCase();



console.log(lowercase);

// if(uzunTextYoxla === -1) {
//     console.log('Xeyir mövcud deyil!')
// } else {
//     console.log('Bəli bu yazı mətndə mövcuddur.')
// }

