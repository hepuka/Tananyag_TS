//PUBLIC alapértelmezett
//PRIVATE - csak az osztályon belül használható
//PROTECTED - csak az osztályban látható és az örökölt osztályokban
//READONLY -   használhatjuk arra, hogy ha egy változót const-ként akarunk használni az osztályban

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

  getFullName(): string {
    return `${this.firstName} ${this.lastName} ${this.address}`;
  }
}

let user3 = new User("Hepuka", "Kun-Fagyal");
console.log(user3.getFullName());

//console.log(user3.firstName); itt már nem lesz látható a firstname mert az osztályban private a láthatósága

class WedDev extends User {
  constructor(public computer: string, firstName: string, lastName: string) {
    super(firstName, lastName);
    this.computer = computer;
  }

  public getLoc() {
    return `My location is ${this.address}`;
  }
}

const Sara = new WedDev("Mac", "Hepuka", "Kun-Fagyal");

console.log(Sara);

console.log(Sara.getLoc());

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
