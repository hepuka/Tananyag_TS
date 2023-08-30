enum StatusEnum {
  NotStarted = "notStarted",
  InProgress = "inProgress",
  Done = "Done",
}

//ENUM használata INTERFACE-ben. status változó típusa enum
interface Task {
  id: string;
  status: StatusEnum;
}

//interface bővíthető, type nem bővíthető
interface Task {
  address?: string;
}

const firstEnumTask: Task = {
  id: "1234564789",
  status: StatusEnum.NotStarted,
};

//objektum enum típusú property-ének felülírása
firstEnumTask.status = StatusEnum.InProgress;
console.log(firstEnumTask);

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done; //felülírom a változó értékét
console.log(notStartedStatus);

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
