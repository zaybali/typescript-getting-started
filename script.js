"use strict";
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
let basicColors; // array only contains string values
let basicColors2; //three string value array
let mixArr2;
let mixArr;
mixArr = ["hey", 2, false];
console.log(mixArr);
// ENUMs (Group of constants)
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["pending"] = 0] = "pending";
    OrderStatus[OrderStatus["confirmed"] = 1] = "confirmed";
    OrderStatus[OrderStatus["shipped"] = 2] = "shipped";
    OrderStatus[OrderStatus["delivered"] = 3] = "delivered";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.shipped);
var Provinces;
(function (Provinces) {
    Provinces["sindh"] = "Sindh";
    Provinces["punjab"] = "Punjab";
    Provinces["balochistan"] = "Balochistan";
    Provinces["KP"] = "KP";
    Provinces["GB"] = "GB";
})(Provinces || (Provinces = {}));
console.log(Provinces.GB);
var MathConst;
(function (MathConst) {
    MathConst[MathConst["Pi"] = 3.14] = "Pi";
    MathConst[MathConst["ranNum"] = Math.random()] = "ranNum";
    MathConst[MathConst["sum"] = 14] = "sum";
})(MathConst || (MathConst = {}));
console.log(MathConst.Pi);
console.log(MathConst.sum);
console.log(MathConst.ranNum);
console.log(MathConst.ranNum);
let a = prompt("What is your name");
let userName = a;
let userName2 = a;
