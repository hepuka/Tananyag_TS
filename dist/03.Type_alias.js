"use strict";
//type kulcsó után megadjuk a címkét majd a halmaz definícióját
//majd a megadott címkét használhatjuk a típusdefinícióban, változóknál és függvényeknél is
let ertek4 = 42;
function pelda(bemenet) {
    return 42;
}
//a progress változó ezeket az értékeket veheti fel pl. egy AJAX kérés közben
let progress;
progress = "Elkezdve";
progress = "Folyamatban";
progress = "Befizetve";
//eredetileg a PopularTag egy string, de a használatkor megadható string tömbnek is
const popularTags = ["dragon", "coffee"];
console.log(popularTags);
const dragonsTag = "dragon;";
