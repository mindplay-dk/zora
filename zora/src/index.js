import { createHarness } from './harness.js';
import { findConfigurationValue, isBrowser } from './env.js';
import { createJSONReporter, createTAPReporter } from 'zora-reporters';

const harness = createHarness();

export { Assert } from './test.js';
export { createJSONReporter, createTAPReporter } from 'zora-reporters';

export const only = harness.only;

export const test = harness.test;

export const skip = harness.skip;

export const report = harness.report;

const start = async () => {
  const reporter =
    findConfigurationValue('ZORA_REPORTER') === 'json'
      ? createJSONReporter()
      : createTAPReporter();
  await report({ reporter });
};

// on next tick start reporting
if (!isBrowser) {
  setTimeout(start, 0);
} else {
  window.addEventListener('load', start);
}
