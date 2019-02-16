const Dragon = require("./dragon.js");

const fooey = new Dragon({
  birthdate: new Date(),
  nickname: "fooey"
});

const baloo = new Dragon({
  birthdate: new Date(),
  nickname: "baloo"
});

// setTimeout(() => {
//   const gooby = new Dragon();
//   console.log(gooby);
// }, 3000);

console.log(fooey);
console.log(baloo);
