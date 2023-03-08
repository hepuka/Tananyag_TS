class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value)) {
      this.dataState = value;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();

MyBands.data = ["aaaaa", "bbbbbb", "cccccc"];

console.log(MyBands.data);

MyBands.data = [...MyBands.data, "ddddd", "eeeee"];

console.log(MyBands.data);
