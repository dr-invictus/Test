//fill
let cars = ['audi', 'bmw', 'kia', 'lanos'];
console.log(cars.fill('fignya', 2, 4));

//reversed
let cars = ['audi', 'bmw', 'kia'];
console.log('cars:', cars);
let reversed = cars.reverse();
console.log('reversed:', reversed);
console.log('cars:', cars);


//compact
const compact = (array) => array.filter((el) => el);
const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]


//from pairs
const fromPairs = (array) => array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc[value[0]] = value[1];
    }
    return acc;
  }, {});
  const data = [['a', 5], ['b', 8]];
  console.log(fromPairs(data)) // { 'a': 5, 'b': 8 }


  //without
const without = (array, ...args) => {
    let filteredArray = [...array];
    for (let i = 0; i < args.length; i += 1) {
      filteredArray = filteredArray.filter((el) => el !== args[i]);
    }
    return filteredArray;
    }
  const data = [4, 2, 9, 4, 2];
  console.log(without(data, 4, 2)); // [9]
