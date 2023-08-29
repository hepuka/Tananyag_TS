interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

type Album4 = {
  userId: number;
  id: number;
  name: string;
  title: string;
  photos?: Array<Photo>;
};

//async függvénnyel
async function getAlbums() {
  const fetchedAlbums = await fetch(
    "http://jsonplaceholder.typicode.com/albums"
  ).then((res) => {
    return res.json() as Promise<Album4[]>; //típuspontosítás, hogy milyen típusú adatot is várunk a fetch-ben. A TS compiler fordítási időben nem tudhatja, hogy milyen adat fog majd jönni szerver oldalról amikor a kérés kimegy.
  });

  const albums = fetchedAlbums.slice(0, 5); //csak az első 5 albumot kérdezzük le

  const promisesOfAllPhotos = albums.map((item) =>
    fetch("http://jsonplaceholder.typicode.com/photos?albumId=" + item.id).then(
      (res) => res.json() as Promise<Photo[]>
    )
  );

  const allPhotos = await Promise.all(promisesOfAllPhotos);
  return albums.map((item, index) => ({ ...item, photos: allPhotos[index] }));
}

window.onload = async function () {
  const albums = await getAlbums();

  console.log(albums);
};

function render(albumok: Array<Album4>) {
  const container = document.getElementById("root");

  if (!container) {
    return;
  } else {
    container.innerHTML = `

    <h1>Albumok</h1>
    ${albumok
      .map(
        (item) => `
    <div>
        <h3>#${item.id}</h3>
        <h3>#${item.title}</h3>
        <br />
        ${item.photos //photos? egy optional chaining, ha a kulcs nem létezik akkor egy undefined-el tér vissza és nem egy hibaüzenettel a consolban
          ?.map(
            (photo) => `
        <img src="${photo.thumbnailUrl}"
        style="display: inline-block;margin-right: 6px;width:30px; height:30px"
        />
        `
          )
          .join("")}
    </div>
    `
      )
      .join("")}
    `;
  }
}

//fetch-eléssel
/* fetch("http://jsonplaceholder.typicode.com/albums")
  .then((res) => {
    //típus pontosítás, hogy milyen adatot is várunk,mert TS compiler fordítási időben nem tudhatja, hogy milyen adat jön a szerverről amikor a fetch kérés kimegy. Fejlesztési idő - Futási idp
    // return <Promise<Album4[]>>res.json();
    return res.json() as Promise<Album4[]>;
  })
  .then((albunok) => {
    console.log(albunok);
  });
 */
