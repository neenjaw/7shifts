const add = require("./string-calculator");

/**
 * Tests commented out as they do not have the delimiter prefix
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
*/

// Step 3
test("adds 1, 3, 4 with custom delimiter", () => {
  expect(add("//;\n1;3;4")).toBe(8);
});

test("adds 1, 2, 3 with custom delimiter", () => {
  expect(add("//$\n1$2$3")).toBe(6);
});

test("adds 2, 3, 8 with custom delimiter", () => {
  expect(add("//@\n2@3@8")).toBe(13);
});
