"use strict";
class Admin extends User {
    constructor() {
        super(...arguments);
        this.editor = "Editor: Hepuka";
    }
    setEditor(editor) {
        this.editor = editor;
    }
    getEditor() {
        return this.editor;
    }
}
const admin = new Admin("adminFirst", "AdminSurname");
console.log(admin);
console.log(admin.getFullName());
//csak az Admin osztály példányai férnek hozzá, a User-é nem
console.log(admin.getEditor());
