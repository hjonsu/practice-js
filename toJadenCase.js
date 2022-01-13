const toJadenCase = function (string) {
  let arr = string.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const result = arr.join(" ");
  return result;
};

console.log(toJadenCase("hi i am bob,"));
console.log(toJadenCase("hi i Am bob,"));
