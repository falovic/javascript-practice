// Demo : Operators

// 1. Can ve Ada'nın boy ve kg bilgilerini alın.
// 2. Alınan bilgilere göre kilo indekslerini hesaplayın.
// Formül: Kilo / Boy'un Karesi
// 3. Hesaplanan indeks bilgisine göre karşılaştırma yapın.
// 4. Aşağıdaki tabloya göre Can ve Ada'yı gruplandırın.

// 0    - 18.4 : Zayıf
// 18.5 - 24.9 : Normal
// 25.0 - 29.9 : Fazla Kilolu
// 30.0 - 34.9 : Şişman (Obez)

let index_Can;
let index_Ada;

const weight_Can = 80;
const weight_Ada = 45;

const height_Can = 1.85;
const height_Ada = 1.60;

index_Can = (weight_Can) / (height_Can * height_Can)
index_Ada = (weight_Ada) / (height_Ada * height_Ada)

console.log(index_Can.toFixed(), index_Ada.toFixed())
// .toFixed() ondalıkları yuvarlar.

let Ada_higher_index = index_Ada > index_Can;
let Can_higher_index = index_Can > index_Ada;

console.log("Ada'nın kilo indeksi, Can'ın kilo indeksinden daha büyük:" + Ada_higher_index);
console.log("Can'ın kilo indeksi, Ada'nın kilo indeksinden daha büyük:" + Can_higher_index);

let Can_Zayıf = (index_Can >= 0) && (index_Can <= 18.4)
let Can_Normal = (index_Can >= 18.5) && (index_Can <= 24.9)
let Can_Kilolu = (index_Can >= 25.0) && (index_Can <= 29.9)
let Can_Obez = (index_Can >= 30.0) && (index_Can <= 34.9)

console.log("Can Zayıf:" + Can_Zayıf)
console.log("Can Normal:" + Can_Normal)
console.log("Can Kilolu:" + Can_Kilolu)
console.log("Can Obez:" + Can_Obez)

let Ada_Zayıf = (index_Ada >= 0) && (index_Ada <= 18.4)
let Ada_Normal = (index_Ada >= 18.5) && (index_Ada <= 24.9)
let Ada_Kilolu = (index_Ada >= 25.0) && (index_Ada <= 29.9)
let Ada_Obez = (index_Ada >= 30.0) && (index_Ada <= 34.9)

console.log("Ada Zayıf:" + Ada_Zayıf)
console.log("Ada Normal:" + Ada_Normal)
console.log("Ada Kilolu:" + Ada_Kilolu)
console.log("Ada Obez:" + Ada_Obez)

