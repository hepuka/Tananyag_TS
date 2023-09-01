// Utility Types

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const fullAssignment: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

/////////////Partial//////////////////
//Partial<interface neve>
//Partial esetében nem szükséges a kötelező property-k implementálása
const partialAssignment: Partial<Assignment> = {
  title: "Final Project"
};

const updateAssignment = (
    fullAssignment: Assignment, //Assignment interface-t teljes egészében használom
    partialAssignment: Partial<Assignment> //Assignment interface-t csak részben használom
): Assignment => {
  return { ...fullAssignment, ...partialAssignment };
};

console.log(updateAssignment(fullAssignment, partialAssignment));
console.log(updateAssignment(fullAssignment, { grade: 95 }));

/////////////////// Required ///////////////////////
//Required esetében az opcionális property-t is implementálni kell
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};
//required miatt a verified-ot is meg kell adni
console.log(recordAssignment({ ...fullAssignment, verified: true }))


////////////////// Pick ///////////////////////
//pick meghatározza, hogy a kötelezők közül, melyiket kell mindenféleképpen megadni
type AssignResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

////////////////// Omit ///////////////////////
//hasonló mint a Partial, itt union-ként kell megadni a kihagyható property-ket
type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

/////////////////// Readonly///////////////////////
const assignGraded: Assignment = updateAssignment(fullAssignment, { grade: 195 });
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

/////////////////// Record//////////////////////////
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blufghe: "0000FF",
  bfghlue: "0000FF",
  blfghfue: "0000FF",
  bgfhfue: "0000FF",
};

// két típus értékeinek kombinálása type-al
type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};
console.log(finalGrades)

// két típus értékeinek kombinálása interface-el
interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 34, assign2: 68 },
  Kelly: { assign1: 76, assign2: 15 },
};
console.log(gradeData)

////////////////// Exclude ////////////////////
//az előre deiniált union típusból a megadott értéket nem veheti fel a változó
type adjustedGrade = Exclude<LetterGrades, "A" | "B">;
const excludedGradeLetter:adjustedGrade = "C"
console.log(excludedGradeLetter)

////////////////// Extract////////////////////
//az előre deiniált union típusból csak a megadott értékeket veheti fel a változó
type highGrades = Extract<LetterGrades, "A" | "B">;
const extractedGradeLetter:highGrades = "A"
console.log(extractedGradeLetter)

//////////////////// Nonnullable///////////////////////
//a változó nem lehet null vagy undefined
type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;
const nonNullableVariable:NamesOnly = "John"

////////////////////// Return  Type//////////////////////
//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);


// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
