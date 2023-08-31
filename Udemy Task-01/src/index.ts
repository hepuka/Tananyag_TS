let arr = [
  {
    accountNumber: 101,
    accountName: "Navin",
    accountBalance: 1000,
  },
  {
    accountNumber: 102,
    accountName: "Pravin",
    accountBalance: 1500,
  },
  {
    accountNumber: 103,
    accountName: "Sud",
    accountBalance: 5000,
  },
];

// Get the list of all bank accounts for which the balance is less than 1500.
// Get the list of all bank accounts name as an array of strings.

let result1: object[] = arr.filter((item) => item.accountBalance < 1500);
let result2: string[] = arr.map((item) => item.accountName);

//2.feladat
//Write an arrow function for returning a bigger number out of 2 numbers.
let selectBiggerNumber = (n1: number, n2: number) => {
  if (n1 > n2) {
    return n1;
  }

  return n2;
};

//3.feladat

// public properties studentId & studentName
// Write a constructor with 2 inputs studentId & studentName
// public method display()  to display student id and name

class Student {
  public studentId: number;
  public studentName: string;

  constructor(studentId: number, studentName: string) {
    this.studentId = studentId;
    this.studentName = studentName;
  }

  public display(): void {
    console.log(`Id: ${this.studentId}, Name: ${this.studentName} `);
  }
}

let s1 = new Student(101, "Navin");
s1.display();
