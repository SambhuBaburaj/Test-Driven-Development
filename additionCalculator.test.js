// const additionCalculator = require("./additionCalculator");
import additionCalculator from "./additionCalculator";
test("addition of 4 and 6 to equal 10", () => {
  expect(additionCalculator(4, 6)).toBe(10);


});
test("addition of 8 and 6 to equal 14", () => {
  expect(additionCalculator(8, 6)).toBe(14);


});