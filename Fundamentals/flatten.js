/*
Lighthouse Kata
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
*/

const flatten = (array) => {
  const result = [];
  array.forEach((el) => {
    Array.isArray(el) ? el.forEach((el2) => result.push(el2)) : result.push(el);
  });
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
