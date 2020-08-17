const add = require("./string-calculator");

// Step 1
test("adds 1 + 2 to equal 3", () => {
  expect(add("1,2,5")).toBe(8);
});

// Step 2
test("adds 1, 2, 3 with newlines", () => {
  expect(add("1\n,2,3")).toBe(6);
});

test("adds 1, 2, 3 with newlines", () => {
  expect(add("1,\n2,4")).toBe(7);
});
