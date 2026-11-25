import { testRunner } from '@cairul/plugin-kit/runner';
import adapter from './run.mjs';
import { junit, tap, testPlugin } from '@cairul/plugin-kit/reports';

const reports = testPlugin('mocha.passed', { junit, tap });

export default testRunner(reports, 'mocha.run', adapter);
