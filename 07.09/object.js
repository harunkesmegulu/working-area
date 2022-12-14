//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//!Read
// console.log(arabalar.lpg); //? .notation
// console.log("MODEL:", arabalar["model"]); //? Square bracket notation

// //? Square bracket yonteminin en buyuk avantaji key degerini
// //? degisken olarak kullanabilmemizdir.
// const key = "mark";
// console.log(arabalar[key]);

// arabalar.motor = "1.6";
// console.log(arabalar);

// //* ---------------------------------------------------------
// //* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
// //* ---------------------------------------------------------

// //? Object Constructure
// function Personel(id, ad, maas) {
//   this.id = id;
//   this.ad = ad;
//   this.maas = maas;
//   // console.log(this); //! Personel objesine baglanmistir (binded)
// }

// const kisi1 = new Personel("1234567890", "Mustafa", 15000);
// const kisi2 = new Personel("177567890", "Canan", 25000);
// // console.log(kisi1);
// console.log(kisi1.ad);
// console.log(kisi2.maas);
// console.log(kisi2["id"]);

// //? Global alanda window objesini gosterir.
// console.log(this);
// window.alert("Merhaba");

//* ---------------------------------------------------------
//* 3- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
  salary: "140000",
};
console.log(worker);

console.log("JOB:", worker.job);
console.log("Lang:", worker["languages"]);

console.log(worker.languages[2]);

worker["languages"].forEach((l) => console.log(l));

worker.dob = "1990";
worker.email = "can@gmail.com";
console.log(worker);

// worker["salary"] = worker["salary"] * 1.1;
worker["salary"] *= 1.1;
console.log(worker);

//* Object Copy
const person = worker; //! Shallow (Sig - Sığ) Copying
console.log("PERSON:", person);

//! Object.create(), Object.assign(), spread (...), concat() , slice() -> Shallow Copying

person.dob = 2000;
console.log("PERSON:", person);

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
// console.log(JSON.stringify(worker));

deepCopyOfWorker.dob = "2022";
console.log("DEEP:", deepCopyOfWorker);

//* ======================================================
//*              Object Metotlari
//* ======================================================

const personal = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  job: "developer",
  salary: "140000",
  drivingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  summary: function () {
    console.log(this); //? window
    return `${this.name} is ${this.calculateAge()} years old`;
  },
  // summary: () => {
  //   console.log(this); //? window
  //   return `${this.name} is ${this.calculateAge()} years old`;
  // },
};

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

console.log("Age:", personal.calculateAge());
console.log("SUMMARY:", personal.summary());

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log(people); //? {person1: {…}, person2: {…}}
console.log("Salary of P2:", people.person2.salary);

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }
console.log("****************");
for (let key of Object.keys(people)) {
  console.log(key);
}

console.log("****************");
//? people objesindeki tum salary 'leri yazdir
for (let v of Object.values(people)) {
  console.log(v.salary);
  // console.log(v["salary"]);
}

//? people objesindeki tum salary 'leri yazdir
for (let [k, v] of Object.entries(people)) {
  console.log(`${k} - ${v.salary}`);
}

//! ARRAY METOTLARI ILE
console.log("********");
Object.keys(people).forEach((p) => console.log(p));
console.log("********");
Object.values(people).forEach((p) => console.log(p.surname));

//? job = developer olanlarin dob degelerini yazdiriniz.
console.log("*** DOB ****");
Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.dob));

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
// const team = [
//   { name: "Josh", surname: "Adams", job: "developer", age: 30 },
//   { name: "Mary", surname: "Bary", job: "tester", age: 22 },
//   { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
// ]; //* JSON

console.log(team);
console.log(team[2]);

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((person) => console.log(person.job));

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const ages = team.map((p) => p.age + 1);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

//? alternatif yöntem***************
const teamFullName0 = team.map(p => {return{
    fullName: p.name.toUpperCase() + " " +
p.surname.toUpperCase(), age: p.age + 5,
}})
///******************************************* */
const teamFullName = team.map(p =>({
    fullName: p.name.toUpperCase() + " " +
p.surname.toUpperCase(), age: p.age + 5,
}));

//****22 yasından kucuk ve esıt olanların adlarını lıstele. */
team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name))

//****22 yasından kucuk ve esıt olanların ısımlarını dızıye saklayınız. */


const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);

//*****ortalama yaşı bul */ //*? ssoru işareti veri varsa işleme sokar, çünkü eğer veri yoksa sonuç veri undifind olduğu için nun olarak döner.

const avgAges = team.reduce((sum,person) => (sum += person?.age?), 0) / team.length;
console.log(avgAges);

//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

const car = {
    name: "BMW",
    model: 1990,
    engine: 1.6,
    colors: ["blue", "purple"],
  };
  
  //* 1.YONTEM (Classical)
  const name1 = car.name;
  const model1 = car["model"];
  
  //* 2.YONTEM: DESTRUCTURING
  
  const { name: carName, colors, model, engine } = car;
  console.log(carName, model, engine, colors);
  
  //* EXAMPLE: NESTED
  const cars = {
    car1: {
      name: "BMW",
      model: 1990,
      engine: 1.6,
    },
    car2: {
      name: "Mercedes",
      model: 2022,
      engine: 2.0,
    },
  };
  
  const { car1, car2 } = cars;
  console.log(car1);
  
  const { name: c1Name, model: c1Model } = car1;
  const { name: c2Name, model: c2Model } = car2;
  
  console.log(c1Name, c2Name);
  
  //* Example
  const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "Josh",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ];

  //* Classical
team.forEach((p) => {
    console.log("****************");
    console.log("Name:", p.name);
    console.log("Surname:", p.surname);
    console.log("Job:", p["job"]);
    console.log("Age:", p.age);
  });
  
  //* DESTRUCTURING (önce tanımladığımız için p.name şeklinde çağırmamıza gerek kalmıyor. Bundan sonra bu yöntem kullanacağım... )
  team.forEach((p) => {
    const { name, surname, job, age } = p;
    console.log("****************");
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Job:", job);
    console.log("Age:", age);
  });
  
  
//*  DESTRUCTURING (ARRAY)
//* ======================================================

//*======================================================
//*  REST (...)
//* ======================================================

//*======================================================
//*  SPREAD (...)
//* ======================================================