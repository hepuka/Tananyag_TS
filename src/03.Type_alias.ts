//type kulcsó után megadjuk a címkét majd a halmaz definícióját

type Szamok = 1 | 42 | 3.2;

//majd a megadott címkét használhatjuk a típusdefinícióban, változóknál és függvényeknél is

let ertek4: Szamok = 42;
function pelda(bemenet: Szamok): Szamok {
  return 42;
}

//2.példa
//létrehozunk egy status típust ami ezt a 3 értékre van deiniálva
type Status = "Elkezdve" | "Folyamatban" | "Befizetve";

//a progress változó ezeket az értékeket veheti fel pl. egy AJAX kérés közben
let progress: Status;

progress = "Elkezdve";
progress = "Folyamatban";
progress = "Befizetve";

//3.példa
type PopularTag = string;
//eredetileg a PopularTag egy string, de a használatkor megadható string tömbnek is
const popularTags: PopularTag[] = ["dragon", "coffee"];
console.log(popularTags);

////////////////////////UNION and ALIAS///////////////////////
//4.példa

type MaybepopularTag = PopularTag | null;
const dragonsTag: MaybepopularTag = "dragon;";
