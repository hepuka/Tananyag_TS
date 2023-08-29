enum StatusEnum {
  NotStarted = "notStarted",
  InProgress = "inProgress",
  Done = "Done",
}

//ENUM használata INTERFACE-ben
//status változó típusa enum
interface Task {
  id: string;
  status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;
console.log(notStartedStatus); //0, mivel az első helyen áll az enum-ban

notStartedStatus = StatusEnum.Done; //felülírom a változó értékét
console.log(notStartedStatus); //2

console.log(StatusEnum.NotStarted); //0
console.log(StatusEnum.InProgress); //1
console.log(StatusEnum.Done); //2

//2.példa
enum SeatChoice {
  ASILE = "asile",
  MIDDLE = 10,
  WINDOW,
  FORTH = 23,
}

const hcSeat = SeatChoice.ASILE;
const num = SeatChoice.WINDOW;

console.log(hcSeat, num);
