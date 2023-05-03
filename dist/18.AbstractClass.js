"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
//HIBÁT JELEZ, mert abstract osztály nem példányosítható, csak örököltethető
//const photo = new TakePhoto("Test", "Test");
class Instagramm extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
//abstract osztály örököltetve már példányosítható
//const photo = new Instagramm("Test", "Test");
