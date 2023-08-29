class Admin extends User {
  private editor: string = "Editor: Hepuka";

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const admin = new Admin("adminFirst", "AdminSurname");

console.log(admin);
console.log(admin.getFullName());

//csak az Admin osztály példányai férnek hozzá, a User-é nem
console.log(admin.getEditor());
