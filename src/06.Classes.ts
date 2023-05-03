//PUBLIC alapértelmezett
//PRIVATE - csak az osztályon belül használható
//PROTECTED - csak az osztályban látható és az örökölt osztályokban
//READONLY - használhatjuk arra, hogy ha egy változót const-ként akarunk használni az osztályban

class User {
  // lastName: string;
  static readonly maxAge = 50;

  // ! jellel lehet jelezni, hogy később fogjuk inicializálni
  idCard!: string;

  //ha a constructor-ban megadjuk a láthatóságot (public address: string) akkor azt a változót a constructor előtt nem kell deklarálni
  constructor(
    private firstName: string,
    public lastName: string,
    protected address: string = "Debrecen",
    readonly unchangableName?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
    this.address = address;
  }

  //nem változtatható meg a változó értéke mert readonly

  /*   changeUnchangableName(): void {
    this.unchangableName = "foo";
  } */

  private deleteAddress() {
    console.log("Address deleted");
  }

  //////////////////////////GETTER/////////////////////////////
  getFullName(): string {
    return `${this.firstName} ${this.lastName} ${this.address}`;
  }

  get getAddress(): string {
    return this.address;
  }

  //////////////////////////SETTER/////////////////////////////
  set setAddress(address: string) {
    this.address = address;
  }
}

let user3 = new User("Hepuka", "Kun-Fagyal");
console.log(user3.getFullName());
console.log(`Address: ${user3.getAddress}`);
//console.log(user3.firstName); itt már nem lesz látható a firstname mert az osztályban private a láthatósága
//user3.deleteAddress(); mivel a deleteAddress privát metódus, így ez csak az osztályban használáható, látható

user3.setAddress = "Budapest";

console.log(user3);

class WedDev extends User {
  constructor(public computer: string, firstName: string, lastName: string) {
    super(firstName, lastName);
    this.computer = computer;
  }

  get getLocation() {
    return `My location is ${this.address}`;
  }
}

const Sara = new WedDev("Mac", "Sara", "Kun-Fagyal");

console.log(Sara);
console.log(Sara.getLocation);

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
//console.log(user.maxAge); itt már nem látható mert static
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
