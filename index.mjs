import { testRunner } from '@cairul/pdk/runner';
import adapter from './run.mjs';
import { junit, tap, testPlugin } from '@cairul/pdk/reports';

const reports = testPlugin('mocha.passed', { junit, tap });

export default testRunner(reports, 'mocha.run', adapter);
