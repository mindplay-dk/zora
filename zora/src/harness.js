import { Assert, createAssert } from './test.js';

export const createHarness = () => {
  const tests = [];

  const { test, skip, only } = createAssert({
    onResult: (test) => tests.push(test),
  });

  // for convenience
  test.only = only;
  test.skip = skip;

  return {
    only,
    test,
    skip,
    report({ reporter }) {
      return reporter(createMessageStream(tests));
    },
  };
};

async function* createMessageStream(tests) {
  for (const test of tests) {
    yield* test;
  }
}
