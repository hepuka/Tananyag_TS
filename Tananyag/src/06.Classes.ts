//PUBLIC alapértelmezett
//PRIVATE - csak az osztályon belül használható
//PROTECTED - csak az osztályban látható és az örökölt osztályokban
//READONLY - használhatjuk arra, hogy ha egy változót const-ként akarunk használni az osztályban

class User {
  //  firstName: string
  //  lastName: string
  //  address: string = "Debrecen"
  //  unchangableName?: string

  static readonly maxAge = 50;
  idCard!: string; // ! jellel lehet jelezni, hogy később fogjuk inicializálni

  //private változók csak az eredeti osztályban használható, az örököltben nem
  //protected változó használható az örökölt osztályban is

  //ha a constructor-ban megadjuk a láthatóságot akkor azt a változót a constructor előtt nem kell deklarálni
  constructor(
    private firstName: string,
    public lastName: string,
    protected _address: string = "Debrecen",
    readonly unchangableName?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
    this._address = _address;
  }

  private deleteAddress() {
    console.log("Address deleted");
  }

  //////////////////////////GETTER/////////////////////////////
  getFullName(): string {
    return `${this.firstName} ${this.lastName}, ${this.address}`;
  }

  get address(): string {
    return this._address;
  }

  //////////////////////////SETTER/////////////////////////////
  set address(address: string) {
    this._address = address;
  }
}

let user3 = new User("Zoltán", "Kun-Fagyal");

console.log(user3.getFullName());
console.log(user3.address);
user3.address = "Bp";

//console.log(user3.firstName); itt már nem lesz látható a firstname mert az osztályban private a láthatósága
//user3.deleteAddress(); mivel a deleteAddress privát metódus, így ez csak az osztályban használáható, látható

console.log(user3);

//////////////////////////////
class WedDev extends User {
  constructor(firstName: string, lastName: string, protected computer: string) {
    super(firstName, lastName);
    this.computer = computer;
  }

  get getLocation() {
    return `My location is ${this.address}`;
  }

  get getComputer() {
    return `My computer: ${this.computer}`;
  }
}

const Sara = new WedDev("Sara", "Pullman", "MAC");

console.log(Sara);
console.log(Sara.getLocation);
console.log(Sara.getComputer);

//2.példa
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class YouTube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("Story was created!");
  }
}

/////////////////////////////////////////////STATIC////////////////////////////////////

//1.példa az előző osztályból
console.log(User.maxAge); //itt látható mert az osztálynévre hívtam meg és nem a példányosított objektumra (static)

//2.példa
class Peeps {
  static count: number = 0;

  static getCount() {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Steve);
console.log(Peeps.count);

//////////////////////////////DECORATORS///////////////////////////

/////////////////// Class Decorator

// function LockClass(constructor: Function) {
//   Object.freeze(constructor);
//   Object.freeze(constructor.prototype);
// }

////////////////////////// Decorator Factories

// function LockClass() {
//   return function (constructor: Function) {
//     Object.freeze(constructor);
//     Object.freeze(constructor.prototype);
//   };
// }

// @LockClass  //Class Decorator
@LockClass() //Decorator Factories
class BankAccount {
  accountNumber: number;

  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }
}

class StudentBankAccount extends BankAccount {
  // Additional options
}

// let acc1 = new BankAccount(101);

/////////////////////////// Class Decorator - Example

function BankStandards() {
  return function (constructor: Function) {
    constructor.prototype.createdDatetime = new Date().toLocaleDateString();
  };
}

@BankStandards()
class BankAccount3 {
  [x: string]: any;
  accountNumber: number;

  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }
}

let acc1 = new BankAccount3(101);
console.log(acc1.createdDatetime);

let acc2 = new BankAccount3(102);
console.log(acc2.createdDatetime);

/////////////////////// Excecution Sequence Decorator

function Log() {
  console.log("Log decorator factory called");
  return function (constructor: Function) {
    console.log("Log decorator  called");
  };
}

function LockClass() {
  console.log("LockClass decorator factory called");

  return function (constructor: Function) {
    console.log("LockClass decorator called");
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
  };
}

@LockClass()
@Log()
class BankAccount111 {
  accountNumber: number;

  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }
}

class StudentBankAccount111 extends BankAccount {
  // Additional options
}

let acc111 = new BankAccount(101);
let acc222 = new BankAccount(101);

///////////////////////////// Property Decorator

function Trim() {
  return function (target: any, key: string) {
    let value = target[key];

    let getter = () => {
      return value;
    };

    let setter = (nextValue: string) => {
      value = nextValue.trim();
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

class BankAccount001 {
  @Trim()
  accountName: string = "     Navin   ";
}

let acc0011 = new BankAccount001();

acc0011.accountName = "     Pravin     ";

console.log(acc0011.accountName + " : length " + acc0011.accountName.length);

//////////////////////// Method Decorator

function UserConfirmation() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    let originalFun = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let isOk = confirm("Are you sure?");

      if (isOk) {
        let result = originalFun.apply(target, args);
        return result;
      } else {
        return null;
      }
    };
  };
}

class BankAccount22 {
  accountName: string = "Navin";

  @UserConfirmation()
  debit() {
    console.log("Debit successfull");
  }

  @UserConfirmation()
  credit() {
    console.log("Credit successfull");
  }
}

let acc1122 = new BankAccount22();

acc1122.credit();
// let isOk = confirm("Are you sure to debit?");
// if (isOk) {
//   acc1.debit();
// } else {
// }

//////////////////////// Method Decorator with parameters

function UserConfirmation1(message: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    let originalFun = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let isOk = confirm(message);

      if (isOk) {
        let result = originalFun.apply(target, args);
        return result;
      } else {
        return null;
      }
    };
  };
}

class BankAccount1122 {
  accountName: string = "Navin";

  @UserConfirmation1("Are you sure to debit from your account?")
  debit() {
    console.log("Debit successfull");
  }

  @UserConfirmation1("Are you sure to credit to your account?")
  credit() {
    console.log("Credit successfull");
  }
}

let acc112233 = new BankAccount1122();

acc112233.debit();
// let isOk = confirm("Are you sure to debit?");
// if (isOk) {
//   acc1.debit();
// } else {
// }
