let promiseToCleanRoom = new Promise((resolve, reject) => {

 let cleanRoom = true;

 if (cleanRoom) {
  resolve('Cleaned the room');
 } else {
  reject('Failed to clean the room');
 }
});

let promiseToDumpGarbage = (p) => {
 return new Promise((resolve) => {
  resolve(p + ' Remove garbage');
 })
};

let promiseToEatIceCream = (p) => {
 return new Promise((resolve) => {
  resolve(p + ' Eat IceCream');
 })
};

promiseToCleanRoom.then((r1) => {
 console.log(r1);
 return promiseToDumpGarbage(r1);
}).then((r2) => {
 console.log(r2);
 return promiseToEatIceCream(r2);
}).then((r3) => {
 console.log(r3);
});
