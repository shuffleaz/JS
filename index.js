// function hesablama(a, b = 1) {
//     return a * b;
// }

// function status(userStatus = false) {
//     if(userStatus == true) {
//         return 'Online!'
//     } else {
//         return 'Offline';
//     }
// }

// var istifadeciVeziyyeti = status();

// document.write(istifadeciVeziyyeti);
// // Offline // false


// console.log(hesablama(6,5));

// Mercedes
// E220
// CLA10
// GL120
// 4 teker
// Benzin, Diesel
// 

// var car = new Object();
// car.marka = "Merecedes";
// car.model = 'CLA120';
// car.petron = 'Benzin';
// car.wheels = 4;
// car.speed = 60;
// car.drive = function() {
//     console.log(car.marka + ' markalı və ' + car.model + ' model maşın ' + car.speed + ' ilə gedir');
// }
// car.temir = function(status = false) {
//     if(status == true) {
//         console.log('Maşın Təmirə getdi.');
//     } else {
//         console.log('Masin temirde deyil!')
//     }
// }

// car.marka = 'BMW'
// car.model = 'Z3';
// car.speed = 120;
// console.log(car.drive());
// console.log(car.temir(true));


// var insan = {
//     adi = "Agshin",
//     soyadi = "Rajabov",
//     yas = 28,
//     adSoyad = function() {
        
//     }
// }

var insan = {
    adi: "Agshin",
    soyad: "Rajabov",
    yas: 28,
    adSoyad: function() {
        return this.adi + ' ' + this.soyad;
    }
}


var insan = new Object()
insan.adi = "Agshin"
insan.soyad = "Rajabov"
insan.yas = 28,
insan.adSoyad = function() {
    return this.adi + ' ' + this.soyad;
}


console.log(insan.adSoyad());

console.log(insan.soyad);
console.log(insan["soyad"]);
