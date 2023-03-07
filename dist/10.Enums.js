"use strict";
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "Done";
})(StatusEnum || (StatusEnum = {}));
let notStartedStatus = StatusEnum.NotStarted;
console.log(notStartedStatus); //0, mivel az első helyen áll az enum-ban
notStartedStatus = StatusEnum.Done; //felülírom a változó értékét
console.log(notStartedStatus); //2
console.log(StatusEnum.NotStarted); //0
console.log(StatusEnum.InProgress); //1
console.log(StatusEnum.Done); //2
