//PUBLIC alapértelmezett
//PRIVATE - csak az osztályon belül használható
//PROTECTED - csak az osztályban látható és az örökölt osztályokban
//READONLY -   használhatjuk arra, hogy ha egy változót const-ként akarunk használni az osztályban

//////////////////////////////VOID,ANY,UNKNOWN//////////////////////////////

//VOID amikor nem térünk vissza semmivel egy függvényből. pl.csak console.log-ot használunk a függvény törzsében

const doSomething = (): void => {
  console.log("doSomething");
};
