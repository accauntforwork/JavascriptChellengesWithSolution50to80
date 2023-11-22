// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.\
let arr51 = [1, 2, 3, 4, 5];
let modifiedarr51 = arr51.map(function (element) {
  return element + 1;
});
console.log(modifiedarr51);

// 52.Template string yordamida ya’ni backticlar orqali “ ushbu
// formatdagi stringni hosil qiling.
let ism52 = "Muhammadqodir",
  familya52 = "Baxtiyorov";
const joinIsmFamilya52 = (ism52, familya52) => `${ism52} ${familya52}`;
console.log(joinIsmFamilya52(ism52, familya52));

// 53.Quyidagi namunani ternary operator ko’rinishida yozing.
// Ternary operatorga misol:
// 2===2 ? 'teng' : 'tengemas'
// Namuna:
// var holatiYaxshimi = true
// var holati;
// if (holatiYaxshimi)
// holati = "yaxshi"
// else
// holati = "yaxshi emas"
const holatiYaxshimi = (holat) => (holat ? "Yaxshi" : "Yomon");
console.log(holatiYaxshimi(true));

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false
const isLenghtEven = (str) => (str.length % 2 === 0 ? true : false);
console.log(isLenghtEven("salom"));

// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
// qaytarsin.
const powFunc = (x, y) => x ** y;
console.log(powFunc(3, 4));

// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.
const lastElement = (arr1) => arr1[arr1.length - 1];
let array = [1, 2, 3, 4, 5, 6, 7];
console.log(lastElement(array));

// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
// yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
// yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
// 400ga ham bo’linganidagina kabisa hisoblanadi.
function isLeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 != 0) ||
    (year % 100 === 0 && year % 400 === 0)
  )
    console.log(`${year} is leap year`);
  else console.log(`${year} is not leap year`);
}
isLeapYear(400);

// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi
// harfisiz qaytarib bersin.
const removeFirstElement = (arr) => {
  arr.shift();
  return arr;
};
let massiv = [1, 2, 3, 4];
console.log(removeFirstElement(massiv));

// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya
// yasang
const toReverseBoolen = (boll) => (boll ? false : true);
console.log(toReverseBoolen(true));

// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft”
// qaytaradi, agar toq bo’lsa “toq” qaytarsin.
const evenOrOdd = (num) => (num % 2 === 0 ? "juft" : "toq");
console.log(evenOrOdd(10));

// 61.Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning
// qavatiga qarab ularning soni oshib boradi.
// Agar funskiyaga qutilarning qavati berilsa, nechta quti turganini
// qaytarsin
const numberOfBoxes = (layers) => layers ** 2;
console.log(numberOfBoxes(4));

// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.
const joinArray = (arr) => arr.join("");
let arr62 = ["hello", "world"];
console.log(joinArray(arr62));

// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
// birlashtirib bitta massiv ko’rinishida qaytarib bersin.
const combineArray = (arr1, arr2) => arr1.concat(arr2);
let arr63 = [1, 2, 3];
let arr63_2 = [4, 5, 6];
console.log(combineArray(arr63, arr63_2));

// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
// 2-argument ushbu massivning biron elementi. Funksiya ushbu
// elementning massiv ichida nechinchi indexda turishini qaytarib
// bersin
const findIndex = (arr, element) => arr.indexOf(element);
let test64Arr = [1, 2, 3, 4];
console.log(findIndex(test64Arr, 3));

// 65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi
// massiv elementini qaytarsin.
const findElement = (arr, index) => arr[index];
console.log(findElement([1, 2, 3, 4], 3));

// 66.Quyidagi namunani kuzatgan holda funksiya yasang.
// namuna([1, 2, 3, 4, 5]) => 15
// namuna([-1, 0, 1]) => 0
// namuna([0, 4, 8, 12]) => 24
const summOfArray = (arr) =>
  arr.reduce(function (accumulator, element) {
    return accumulator + element;
  });
let test65Arr = [1, 2, 3, 4, 5];
console.log(summOfArray(test65Arr));

// 67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida
// qaytarilsin
function wordToNumber(word) {
  const wordMap = {
    nol: 0,
    bir: 1,
    ikki: 2,
    uch: 3,
    "to'rt": 4,
    besh: 5,
    olti: 6,
    yetti: 7,
    sakkiz: 8,
    "to'qqiz": 9,
  };
  return wordMap[word];
}
console.log(wordToNumber("bir"));

// 68.Funskiyaga sonlar massivi beriladi, va 2-argument sifatida
// bitta son beriladi agar ushbu son massivni ichida bo’lsa funksiya
// true qaytarsin, aks holda false
const includesInArr = (arr, element) => arr.includes(element);
console.log(includesInArr);

// 69.Funskiya sonlar va stringlar massivi berilsa, massivning
// ichidagi sonlarni stringga o’girib, ushbu massivni funksiya yana
// qaytarib bersin.
const numberString = (arr) => {
  return arr.map(function (item) {
    if (typeof item === "number") {
      return item.toString();
    } else {
      return item;
    }
  });
};
console.log(numberString([1, 2, "a", "b"]));

// 70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.
// Funksiya kubik rubikni necha qatorligiga qarab turib,
// kubikchalar sonini qaytasin
const sumofCubs = (layers) => layers ** 3;
console.log(sumofCubs(3));

// 71.Oddiy avtomobil 4ta yo’lovchi va 1ta havdovchini o’z ichiga
// olishi mumkin. Bundan kelib chiqib safarga chiqish uchun
// odamlar soni aniq bo’lsa funksiya kamida nechta avtomobil
// kerakligini qaytarsin.
const howManyCarsNeddTrip = (travelers) =>
  travelers % 4 == 0 ? travelers / 4 : travelers / 4 + 1;
console.log(howManyCarsNeddTrip(16));

// 72.Funksiya tekshirisin, agar unga berilgan stringda bo’sh joy
// mavjud bo’lsa true qaytarsin, aks holda false.
const checkForSpace = (str) => str.includes(" ");
console.log(checkForSpace("Hello World"));

// 73.Funksiya biron qutining olchamlari ma’lumotlarini object
// sifatida qabul qiladi. funksiya ushbu qutining hajmini qaytarib
// bersin. Hajm = Balandlik * Eni * Uzunlik
const calculateVolume = (height, width, length) => height * width * length;
console.log(calculateVolume(10, 15, 20));

// 74.Funksiya son1, son2 va massiv qabul qiladi. Funksiya ushbu
// massivni ichidan son1dan katta va son2dan kichik sonlarni
// ajratib olib yangi massiv qaytarsin. Bunda son1 doim son2dan
// kichik.
const filterNumbers = (arr, num1, num2) =>
  arr.filter(
    (item) => item > Math.min(num1, num2) && item < Math.max(num1, num2)
  );
let testArr_74 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterNumbers(testArr_74, 3, 8));

// 75.Funksiya massiv qabul qiladi. Ushbu funksiya unga berilgan
// massiv elementlariga mos o’rinda joylashgan elementlarning
// turini saqlagan massiv qaytarsin.
const getTypes = (arr) => arr.map((item) => typeof item);
let elements = [1, "hello", true, undefined];
console.log(getTypes(elements));

// 76.Funskiya string va number qabul qiladi. Funksiya ushbu
// stringni berilgan son miqdoricha qayta-qayta yozib natijani
// string ko’rinishida qaytarsin.
const repeat = (str, amount) => {
  let modifiedArr = [];
  for (let i = 0; i < amount; i++) {
    modifiedArr.push(str);
  }
  return modifiedArr.join("");
};
console.log(repeat("salom", 5));

// 77.Funksiyaga so’z kiritilsa, agar ushbu so’z ko’plikda bo’lsa
// funksiya true qaytarsin, aks holda false.
const isPlural = (str) => str.endsWith("lar");
console.log(isPlural("salomlar"));

// 78.Funksiya string qabul qiladi. Ushbu funksiya ushbu stringni
// bosh va oxirgi harflarini birlashtirgan stringni qaytarsin.
const firstEndCharakter = (str) => `${str[0]}${str[str.length - 1]}`;
console.log(firstEndCharakter("salom"));

// 79.Jon so’zni qiynalib talaffuz qiladi. Masalan quyosh so’zini
// qu… qu… quyosh deb, daraxt so’zini da… da… daraxt deb, ya’ni
// boshida 2 marta so’zini 2ta harfini aytadi keyin hammasini.
// Agar funksiya string kiritilsa xuddi shunday formatda string
// qaytarsin
const stammer = (str) =>
  str[0] + str[1] + "..." + str[0] + str[1] + "..." + str;
console.log(stammer("salom"));

// 80.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// ahvol("happy") => "Today, I am feeling happy"
// ahvol("sad") => "Today, I am feeling sad"
// ahvol() => "Today, I am feeling neutral"
const howAreYou = (situation) => `Today, I am feeling ${situation}`;
console.log(howAreYou("happy"));
