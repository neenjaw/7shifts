const add = require("./string-calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(add("1,2,5")).toBe(8);
});
