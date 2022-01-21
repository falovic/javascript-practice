// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.

var car = ["Bmw","Mercedes","Opel","Mazda"]; 

// Dizi kaç elemanlıdır ?

console.log(car.length);

// Dizinin ilk ve son elemanı nedir ?



// "Renault" değerini dizinin sonuna ekleyin.

car.push("Renault");

// "Toyota" değerini dizinin başına ekleyin.

car.unshift("Toyota");

// "Seat" değerini siliniz.



// "Toyota" değerini siliniz.

car.shift();

// Dizi elemanlarını ters çevirin

car.reverse();

// Dizi elemanlarını alfabetik olarak sıralayın.

car.sort();

// [1,2,5,80] dizisini sıralayın.

val = [1,2,5,80];
console.log(val.sort());

// "Opel" değeri dizinin bir elemanımıdır ?

console.log(car.includes("Opel"));

// aşağıdaki ifadeyi diziye çeviriniz.

var str = "Chevrolet,Dacia";
console.log(str.split(","));



// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.

// Oluşturulan diziden son 2 elemanı siliniz.

// console.log(arr3.pop());
// console.log(arr3.pop());

// console.log(arr3.splice(6,2));

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/

console.log(car);