// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.

var car = ["Bmw", "Mercedes", "Opel", "Mazda"];
console.log(car);

var car = new Array("Bmw", "Mercedes", "Opel", "Mazda")
console.log(car);

// Dizi kaç elemanlıdır ?

console.log(car.length);

// Dizinin ilk ve son elemanı nedir ?

console.log(car[0]);
console.log(car[3]);
console.log(car[car.length - 1]);

// "Renault" değerini dizinin sonuna ekleyin.

car.push("Renault");
car[4] = "Renault";
car[car.lenght] = "Renault";

// "Toyota" değerini dizinin başına ekleyin.

car[0] = "Toyota"
car.unshift("Toyota");

// "Toyota" değerini siliniz.

car.shift();

// Dizi elemanlarını ters çevirin

car.reverse();

// Dizi elemanlarını alfabetik olarak sıralayın.

car.sort();

console.log(car);

// [1,2,5,80] dizisini sıralayın.

var nmb = [1, 2, 5, 80];
console.log(nmb.sort());

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(nmb.sort(compare));

// "Opel" değeri dizinin bir elemanımıdır ?

console.log(car.indexOf("Opel"));
console.log(car.includes("Opel"));

// Aşağıdaki ifadeyi diziye çeviriniz.

var str = "Chevrolet,Dacia";
var car2 = str.split(",")
console.log(car2);

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.

var car3 = car.concat(car2);
console.log(car3);

// Oluşturulan diziden son 2 elemanı siliniz.

console.log(car3.splice(5, 2));

// Aşağıda verilen elemanları bir dizi içerisinde saklayınız.

/*
     studentA : Yiğit Bilgi 2010
     StudentB : Fatih Şahin  1997
     studentC : Kemal Gözler 1998
*/

var studentA = ["Yiğit", "Bilgi", 2010]
var studentB = ["Fatih", "Şahin", 1997]
var studentC = ["Kemal", "Gözler", 1998]

var students = [studentA, studentB, studentC]

console.log(students);

console.log(students[0][0]);
console.log(students[1][0]);
console.log(students[2][0]);

console.log(students[0][1]);
console.log(students[1][1]);
console.log(students[2][1]);

console.log(students[0][2]);
console.log(students[1][2]);
console.log(students[2][2]);