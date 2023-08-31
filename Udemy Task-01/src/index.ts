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

class StudentOld {
  private studentId: number;
  public studentName: string;

  constructor(studentId: number, studentName: string) {
    this.studentId = studentId;
    this.studentName = studentName;
  }

  public display(): void {
    console.log(`Id: ${this.studentId}, Name: ${this.studentName} `);
  }
}

let s1 = new StudentOld(101, "Navin");
s1.display();

//4.feladat
/*Add a property named schoolName in the child class SchoolStudent
Add a constructor with 3 parameters in the child class & call the super class constructor
Override the function display() in the child class, to display all three properties
*/
class Student {
  studentId: number;
  studentName: string;

  constructor(studentId: number, studentName: string) {
    this.studentId = studentId;
    this.studentName = studentName;
  }

  display() {
    console.log("Id: " + this.studentId);
    console.log("Name: " + this.studentName);
  }
}

class SchoolStudent extends Student {
  schoolName:string
  constructor(studentId: number, studentName: string,schoolName:string) {
    super(studentId,studentName);
    this.schoolName=schoolName
  }

  display(){
    console.log(`Id: ${this.studentId}, Name: ${this.studentName}, School: ${this.schoolName}`)
  }
}

let student1 = new SchoolStudent(101, "Navin", "ABC");
student1.display();
