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

  //unicue
  const unique = (array) => Array.from(new Set(array)); 
const data = [88, 14, 88, 21, 3];
console.log(unique(data)); // [88, 14, 21,3]


//isEqual
const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  const compared = firstArray.map((el, id) => secondArray[id] === el);
  return !compared.includes(false);
};
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false

//flatten
const flatten = (array) => array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]

//chunk--??
const arrayToChank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < Math.ceil(arr.length/size); i++) {
    result.push(arr.slice((i * size), (i * size) + size));
  }
  return result;
}
console.log(chunk(arrayToChank, 2));

//chunk2--??
const chunk = (array, size) => {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
};
const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]


//intersection
const intersection = (...arrays) => {
  const result = arrays[0].filter((element) => {
    const indexOfElement = arrays[1].indexOf(element);
    if (indexOfElement >= 0) {
      return element;
    }
  });
  if (arrays.length > 2) {
    intersection(result, ...arrays.slice(2, arrays.length));
  }
  return Array.from(new Set(result));
};
const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']