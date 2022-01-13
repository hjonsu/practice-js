const uniqueInOrder = function (iterable) {
  let arr = [];

  if (Array.isArray(iterable) === true) {
    for (let i = 0; i < iterable.length; i++) {
      if (arr.includes(iterable[i]) === false) {
        arr.push(iterable[i]);
      }
    }
    return arr;
  } else {
    let iterableArr = Array.from(iterable);
    for (let i = 0; i < iterableArr.length; i++) {
      if (arr.includes(iterableArr[i]) === false) {
        arr.push(iterableArr[i]);
      }
    }
    return arr;
  }
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 3]));
