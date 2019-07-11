// İstifadəçi Qeydiyyatı

// İstifadəçi

// var name;
// var lastName;
// var email;
// var age;
// var bio;

// var User = {
//     name: "Agshin",
//     lastName: "Rajabov",
//     age: 28,
//     email: "akorecebov@gmail.com",
//     bio: "Mətn",
//     save: function() {
//         console.log(this.name + ' ' + this.lastName + ' datanın yaddaşına verildi!');
//     }
// }


// function createUser(name, surname, email, password) {
// //    var user = {}; //Obyekt
// //    user.name = name;
// //    user.surname = surname;
// //    user.email = email;
// //    user.pass = password;
//     var user = {
//         name: name,
//         surname: surname,
//         email: email,
//         pass: password,
//         saveMysql : function() {
//             alert(user.name + ' ' + user.surname + ' datanın yaddaşına verildi!');
//         }
//     };
//     return user;
// }

// var istifadeci = createUser(userName, 'Babayev', 'nicat@gmail.com', 123456);
// console.log(istifadeci.saveMysql());

function User(firstName, lastName, age, gender, hobbies) {
    this.name = {
        first: firstName,
        last: lastName
    }
    this.age = age;
    this.gender = gender;
    this.hobbies = hobbies;
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' adlı istifadəçimiz ' + this.hobbies[1] + ' və ' + this.hobbies[2] + ' sevir!');
    }
}

var istifadeci = new User('Agshin', 'Rajabov', 28, 'kişi', ['kitab oxumaq', 'kodlaşdırma', 'alternativ rock']);
var istifadeci2 = new User('Nicat', 'Babayev', 32, 'kişi', ['kitab oxumaq', 'kodlaşdırma', 'alternativ rock']);


console.log(istifadeci.name.first);
console.log(istifadeci2.name.last);