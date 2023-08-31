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
