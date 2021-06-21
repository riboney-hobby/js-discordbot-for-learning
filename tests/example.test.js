// example function

const greeting = 'Hello';

const helloWorld = (g) => g + ' World!';

// describe(name, fn): block that groups together several related tests
//   name: name of the test
//   fn: callback function
describe('helloWorld', () => {
  // test(name, fn, timeout): runs test; test.js files require `test`
  //  name: name of test
  //  fn: function that contains the expectations to test
  //  timeout: Optional, Specifies in ms how long to wait before aborting
  test('should output greeting + " World!"', () => {
    // expect(value): used when testing a value; called with "matcher" function
    //  value: argument that should be produced from code that is being tested
    // toBe(value): compares primitives/ objects with Object.is
    //  ....tip --> dont use with float numbers, use toBeCloseTo() instead
    //  value: value to compare with `this`
    expect(helloWorld(greeting)).toBe('Hello World!');
  });
});

// Example output:
// PASS  tests/example.test.js
// helloWorld
//   ✓ should output greeting + " World!" (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.366 s
// Ran all test suites.
