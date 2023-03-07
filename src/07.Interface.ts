//Ha egy objektum struktúráját egy általános referenciaként határozom meg mint a TYPE ALIAS-nál, akkor e helyett interface-t is használhatunk.
interface Album2 {
  id: number;
  name: string;
  title: string;
}

//különbség, hogy az INTERFACE bővíthető további kuécs-érték párral a TYPE ALIAS nem
interface Album2 {
  address: string;
}

//INTERFACE használható TYPE ALIAS-ban is mint a kulcs értéke
//ha ?-et rakok a kulcs után akkor az a kulcs opcionális, nem szükséges megadni
interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

type Album3 = {
  id: number;
  name: string;
  title: string;
  photos?: Array<Photo>;
};

//2.példa
interface UserInterface {
  name: string;
  age: number;
  address?: string;
  getMessage(): string;
}

const user: UserInterface = {
  name: "Zoltan",
  age: 46,
  getMessage() {
    return `Hello ${this.name}`;
  },
};

console.log(user);

console.log(user.name);

console.log(user.getMessage());
