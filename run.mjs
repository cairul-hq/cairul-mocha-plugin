import { join } from 'node:path';
import { list, option, report, selectors, value } from '@cairul/plugin-kit/runner';
import { junit } from '@cairul/plugin-kit/reports';

export default {
  command: ['mocha'],
  select: selectors({ files: list, titlePattern: value, titleIncludes: value }),
  build({ files, titlePattern, titleIncludes }, temp) {
    if (titlePattern && titleIncludes) throw new Error('Choose a title pattern or substring.');
    return {
      args: [
        '--reporter',
        'xunit',
        '--reporter-option',
        'output=' + join(temp, 'result.xml'),
        ...option('--grep', titlePattern),
        ...option('--fgrep', titleIncludes),
        ...(files ?? []),
      ],
      read: report('result.xml', junit),
    };
  },
};
