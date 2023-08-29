class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.map((item) => {
  console.log(item.client, /*inv.details,*/ item.amount);
  console.log(item.format());
});

//types
type newObj = {
  type: string;
  tofrom: string;
  details: string;
  amount: number;
};

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const sendObj: newObj = {
    type: type.value,
    tofrom: tofrom.value,
    details: details.value,
    amount: amount.valueAsNumber,
  };
  console.log(sendObj);
});
