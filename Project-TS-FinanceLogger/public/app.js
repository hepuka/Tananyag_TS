"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("luigi", "work on the luigi website", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.map(function (item) {
    console.log(item.client, /*inv.details,*/ item.amount, item.format());
});
var form = document.querySelector(".new-item-form");
console.log(form.children);
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var sendObj = {
        type: type.value,
        tofrom: tofrom.value,
        details: details.value,
        amount: amount.valueAsNumber,
    };
    console.log(sendObj);
});
