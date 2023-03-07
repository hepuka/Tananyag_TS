"use strict";
//T a default neve a generic-nek
//minden generic adattípust <>-be kell rakni
const addId = (obj) => {
    const id = Math.random().toString(16); //hexa számot ad vissza
    return Object.assign(Object.assign({}, obj), { id });
};
const user4 = {
    name: "Jack",
    age: 45,
    data: {
        meta: "foo",
    },
    meta: "bar",
};
const user5 = {
    name: "John",
    age: 20,
    data: ["foo", "bar", "baz"],
    meta: "Debrecen",
};
const result = addId(user4);
console.log(result);
