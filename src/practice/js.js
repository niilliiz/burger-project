// console.log(ingredient["salad"]);

// let trasnformed = Object.keys(ingredient)
//     .map((ingKey) => {
//         // console.log(ingKey);
//         return [...Array(ingredient[ingKey])].map((_, i) => {
//             return console.log(_ + i);
//         });
//     })
//     .reduce((arr, el) => {
//         return arr.concat(el);
//     });
// let trasnformed = Object.keys(ingredient).reduce((arr, el) => {
//     return arr.concat(el);
// });
// console.log(trasnformed);

// let trans = Object.keys(ingredient)
//     .map((ingKey) => {
//         return console.log(ingKey + 1);
//     })
//     .map((_, i) => {
//         return console.log(_ + i);
//     })
//     .reduce(
//         (arr, el) => {
//             return arr.concat(el);
//         }, ["a"]
//     );
// console.log(trans);

// const disabledInfo = {
//     ...ingredient,
// };
// for (let key in disabledInfo) {
//     disabledInfo[key] = disabledInfo[key] <= 0;
// }
// console.log(disabledInfo);

const ing = { salad: 1, bacon: 0, cheese: 2, meat: 4 };

const sum = Object.values(ing);
console.log(sum);

// for (const item in burger) {
//     for (const key in burger[item]) {
//         console.log(burger[item][key]);
//     }
// }

// console.log(Array(burger["ing"]));
//     const arrayOfIngValue = Object.values(burger["ing"]).map((item) => item + 1);
// console.log(arrayOfIngValue);