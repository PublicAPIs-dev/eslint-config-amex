module.exports = {
  extends: [
    './index',
  ].map(require.resolve),
  env: {
    jest: true,
  },
  plugins: [
    'jest',
  ],
  rules: {
    // open a PR per rule change
    // ****.com/stash/projects/UIE/repos/eslint-config-axp/pull-requests?create

    // following 4 rules all added in PR 14
    // the way jest mocking works sometimes requires requiring within scope of each test
    'global-require': 'warn',
    // skipped tests can lead to false build successes
    'jest/no-disabled-tests': 'error',
    // forces you to remove .only from tests by raising error whenever you are using that feature.
    'jest/no-focused-tests': 'error',
    // disallows having tests with identical name
    'jest/no-identical-title': 'error',
  },
};
