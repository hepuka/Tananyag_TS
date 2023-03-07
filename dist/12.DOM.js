"use strict";
///////////////////////////DOM in TYPESCRIPT////////////////////////
//as HTMLInputElement meg kell adni mert csak ezzel tudjuk használni az elemre a metódusokat pl. a value
const someElement = document.querySelector(".foo");
//console.log(someElement.value);
//eseménykezőben is használni kell as HTMLInputElement-et, hogy az elem metódusait használni tudjuk
/* someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
}); */
