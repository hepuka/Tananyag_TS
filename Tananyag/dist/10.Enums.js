"use strict";
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "Done";
})(StatusEnum || (StatusEnum = {}));
const firstEnumTask = {
    id: "1234564789",
    status: StatusEnum.NotStarted,
};
//objektum enum típusú property-ének felülírása
firstEnumTask.status = StatusEnum.InProgress;
console.log(firstEnumTask);
let notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done; //felülírom a változó értékét
console.log(notStartedStatus);
//2.példa
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["ASILE"] = "asile";
    SeatChoice[SeatChoice["MIDDLE"] = 10] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 11] = "WINDOW";
    SeatChoice[SeatChoice["FORTH"] = 23] = "FORTH";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.ASILE;
const num = SeatChoice.WINDOW;
console.log(hcSeat, num);
