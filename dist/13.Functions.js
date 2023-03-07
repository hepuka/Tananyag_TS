"use strict";
//Bemenetnek meghatároztuk,hogy az csak string típusú lehet és a kiment csak number típusú
function peldaFuggveny(bemeneti) {
    return 2;
}
//ez esetben nem kell kimeneti típust megadni, mert a length alapból numberrel tér vissza
function peldaFuggveny2(bemeneti) {
    return bemeneti.length;
}
console.log(peldaFuggveny2("Zolika"));
//Arrow functions
const getFullName = (name, surname) => {
    return `${name} ${surname}`;
};
console.log(getFullName("Kun-Fagyal", "Zoltán"));
