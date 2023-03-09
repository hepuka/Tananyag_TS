"use strict";
//használata: objektum létrehozásakor
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 45,
};
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);
let prop = "Pizza";
console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    // [index: string]: number; ezt kell deklarálni az elején
    for (const item in transactions) {
        total += transactions[item];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
//todaysTransaction.Pizza = 40; módosítás nem lehet mert readonly
//nem dob hibát mert az interface-ben nincs meghaározva egyértelműne semmi, eredmény undefined
//hibás hozzáférést engedélyez egy objektum nem létező kulcsára
console.log(todaysTransaction["Dave"]);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
//console.log(student.test);  [key: string]: string | number | number[] | undefined; miatt nem dob hibát, hogy test nincs
//index signature ([key: string]: string | number | number[] | undefined;) deklarálása nélkül így kell végigmenni az objektumon
//1.ver. keyof Student-el ha tudjuk az objektum típusát
for (const item in student) {
    console.log(`${item}: ${student[item]}`);
}
//2.ver typeof student-el ha nem tudjuk az objektum típusát
Object.keys(student).map((item) => {
    console.log(student[item]);
});
//3.
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const item in monthlyIncomes) {
    console.log(monthlyIncomes[item]);
}
