// //Spread Operator
// let a = [10, 20, 30];
// let b = [...a, 40, 50, 60];
// console.log(b);

// //Destructuring Operator
// let marks = [90, 95, 80, 100];
// let [m1, m2, m3, m4] = marks;
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);

// //Arrow Function
// let arrow = () => {
//   console.log("Hello");
// };
// arrow();

// //normal Function
// function normal(callBack) {
//   console.log("World");
// }
// normal();

// //Call Back Function
// let arrow = () => {
//   console.log("Hello");
// };

// function normal(callBack) {
//   callBack();
// }
// normal(arrow);

//promise

let promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Successfull");
  } else {
    reject("Failed");
  }
});
  
promise
  .then((message) => console.log(message))
  .catch((message) => console.log(message));
