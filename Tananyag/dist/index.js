"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//async függvénnyel
function getAlbums() {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchedAlbums = yield fetch("http://jsonplaceholder.typicode.com/albums").then((res) => {
            return res.json(); //típuspontosítás, hogy milyen típusú adatot is várunk a fetch-ben. A TS compiler fordítási időben nem tudhatja, hogy milyen adat fog majd jönni szerver oldalról amikor a kérés kimegy.
        });
        const albums = fetchedAlbums.slice(0, 2); //csak az első 5 albumot kérdezzük le
        const promisesOfAllPhotos = albums.map((item) => fetch("http://jsonplaceholder.typicode.com/photos?albumId=" + item.id).then((res) => res.json()));
        const allPhotos = yield Promise.all(promisesOfAllPhotos);
        return albums.map((item, index) => (Object.assign(Object.assign({}, item), { photos: allPhotos[index] })));
    });
}
function render(albumok) {
    const container = document.getElementById("root");
    if (!container) {
        return;
    }
    else {
        container.innerHTML = `

    <h1>Albumok</h1>
    ${albumok
            .map((item) => {
            var _a;
            return `
    <div>
        <h3>#${item.id}</h3>
        <h3>#${item.title}</h3>
        <br />
        ${(_a = item.photos //photos? egy optional chaining, ha a kulcs nem létezik akkor egy undefined-el tér vissza és nem egy hibaüzenettel a consolban
            ) === null || _a === void 0 ? void 0 : _a.map((photo) => `
        <img src="${photo.thumbnailUrl}"
        style="display: inline-block;margin-right: 6px;width:30px; height:30px"
        />
        `).join("")}
    </div>
    `;
        })
            .join("")}
    `;
    }
}
window.onload = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const albums = yield getAlbums();
        render(albums);
        console.log(albums);
    });
};
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
