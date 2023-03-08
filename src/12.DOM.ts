///////////////////////////DOM in TYPESCRIPT////////////////////////

//as HTMLInputElement meg kell adni mert csak ezzel tudjuk használni az elemre a metódusokat pl. a value
const someElement = document.querySelector(".foo") as HTMLInputElement;
//console.log(someElement.value);

//eseménykezőben is használni kell as HTMLInputElement-et, hogy az elem metódusait használni tudjuk
/* someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
}); */

const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("img") as HTMLImageElement;

//img.src;
//myImg.src;
