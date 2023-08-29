//használata: objektum létrehozásakor

interface TransactionsObj {
  //annak deklarálása, hogy mindegyik key string és mindegyik value number
  //readonly-nak is rakhatjuk
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransaction: TransactionsObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 45,
};

console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransaction[prop]);

const todaysNet = (transactions: TransactionsObj): number => {
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

///////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

//console.log(student.test);  [key: string]: string | number | number[] | undefined; miatt nem dob hibát, hogy test nincs

//index signature ([key: string]: string | number | number[] | undefined;) deklarálása nélkül így kell végigmenni az objektumon

//1.ver. keyof Student-el ha tudjuk az objektum típusát
for (const item in student) {
  console.log(`${item}: ${student[item as keyof Student]}`);
}

//2.ver typeof student-el ha nem tudjuk az objektum típusát
Object.keys(student).map((item) => {
  console.log(student[item as keyof typeof student]);
});

//3.
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");

/////////////////////////////////////////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const item in monthlyIncomes) {
  console.log(monthlyIncomes[item as keyof Incomes]);
}
