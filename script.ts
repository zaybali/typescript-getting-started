// let user: string = "Zayb Ali";

// let age: number = 30;

// let qualification: string | number = "BSCS";

// qualification = 16;

// console.log(user, age);

// let fruits: string[] = ['Apple', 'Banana'];

// let nums: number[] = [1, 3, 5, 7];

// let mixArr: (string | number)[] = ["Cherry", "Dates"];

// mixArr.push(5);

// console.log(fruits, nums, mixArr);



// type Mixed = string | number | boolean;

// let a: Mixed = "hey";

// let  b: Mixed = 34;

// let c: Mixed = false;

// console.log(a, b, c);


// type Car = {
//   name: string,
//   model: number,
//   varient: string,
//   isAutomatic: boolean,
//   features: string[],
//   launchedYear?: number,
//   calculateAvg?: (distance: number, fuelQty: number) => number
// }

// let myCar: Car = {
//   name: 'Sonata',
//   model: 2024,
//   varient: "Sonata 2.5",
//   isAutomatic: true,
//   features: ["Airbags", "Anti-Theft System", "Child lock"],
//   calculateAvg:(distance, fuelQty) => {
//      return distance / fuelQty;
//   }
// }

// myCar.launchedYear = 2025;

// if (myCar.calculateAvg) {
//   let avg = myCar.calculateAvg(100, 10);
//   console.log(`Average fuel consumption: ${avg}`);
// }

// console.log(myCar);


/*************************************************************/

// TUPLES (Predefined Array Type and length)

let basicColors: string[];  // array only contains string values

let basicColors2: [string, string, string]; //three string value array

let mixArr2: (string | number | boolean)[];
let mixArr: readonly [string, number, boolean];

mixArr = ["hey", 2, false];

console.log(mixArr);


// ENUMs (Group of constants)


enum OrderStatus {
  pending,
  confirmed,
  shipped,
  delivered
}

console.log(OrderStatus.shipped);


enum Provinces {
  sindh = 'Sindh',
  punjab = "Punjab",
  balochistan = "Balochistan",
  KP = "KP",
  GB = "GB"
}

console.log(Provinces.GB);



enum MathConst {
  Pi = 3.14,
  ranNum = Math.random(),
  sum = 5 + 9
}

console.log(MathConst.Pi);
console.log(MathConst.sum);

console.log(MathConst.ranNum);
console.log(MathConst.ranNum);



let a = prompt("What is your name");

let userName: string = a as string;

let userName2: string = <string>a;
