const Factorial = require("../factorial/index.js");
const Ratio = require("../ratio/index.js");

const ratioAndFactorial = (one, two, three) => {
  const Obj = {
    ratio: Ratio(one, two),
    factorial: Factorial(three),
  };
  return Obj;
};

module.exports = ratioAndFactorial;
