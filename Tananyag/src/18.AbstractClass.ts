
// abstract osztály nem példányosítható, csak örököltethető.

abstract class TakePhoto2 {


   protected constructor(public cameraMode: string, public filter: string) {
    this.cameraMode = cameraMode;
    this.filter = filter;
  }
  abstract mobile:string;
  abstract getSepia(): void; //ez a metódus is csak az örökölt példányra alkalmazható

  getRealTime(): number {
    return 8;
  }
}

//HIBÁT JELEZ, mert abstract osztály nem példányosítható, csak örököltethető. örököltetve már példányosítható
//const photo = new TakePhoto("Test", "Test");

class Instagramm extends TakePhoto2 {
  constructor(
      public cameraMode: string,
      public filter: string,
      public burst: number,
      public mobile: string) {

      super(cameraMode, filter);
      this.mobile=mobile
      this.burst=burst
  }
      getSepia(): void { //abstarct metódusokat kötelező implementálni
        console.log("Sepia");
      }

}

//abstract osztály örököltetve már példányosítható
const photo = new Instagramm("Test", "Test", 3, "Iphone");
console.log(photo)
photo.getSepia();
console.log(photo.getRealTime());
