//TYPE INFERENCE révén nem kell típusokat megadni, automatikusan felismeri
let album = {
  id: 1,
  name: "valami",
  title: "Bla Bla",
};

//Structural typing
//csak felépítésre figyel, az objektum property-ei csak a megadott típusú értékeket vehetik fel

//TYPE ALIAS használata:

type Album = {
  id: number;
  name: string;
  title: string;
};

let album2: Album = {
  id: 2,
  name: "Halihó",
  title: "Bla Bla",
};
