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
