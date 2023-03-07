//T a default neve a generic-nek

//minden generic adattípust <>-be kell rakni
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16); //hexa számot ad vissza
  return {
    ...obj,
    id,
  };
};

//data bármilyen adattípus lehet
//a lenti példányban egyszer objektum a másiknál string tömb
interface UserInterface3<T, V> {
  name: string;
  age: number;
  data: T;
  meta: V;
}

const user4: UserInterface3<{ meta: string }, string> = {
  name: "Jack",
  age: 45,
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const user5: UserInterface3<string[], string> = {
  name: "John",
  age: 20,
  data: ["foo", "bar", "baz"],
  meta: "Debrecen",
};

const result = addId<UserInterface3<{}, string>>(user4);

console.log(result);
