import type { eventWithTime } from '@candle-analytics/rrweb-types';
import { record } from '@candle-analytics/rrweb';
import { getRecordConsolePlugin } from '../../src/index';

window.Date.now = () => new Date(Date.UTC(2018, 10, 15, 8)).valueOf();
const snapshots: eventWithTime[] = ((window as any).snapshots = []);
record({
  emit: (event) => {
    snapshots.push(event);
  },
  // maskTextSelector: ${JSON.stringify(options.maskTextSelector)},
  // maskAllInputs: ${options.maskAllInputs},
  // maskInputOptions: ${JSON.stringify(options.maskAllInputs)},
  // userTriggeredOnInput: ${options.userTriggeredOnInput},
  // maskTextFn: ${options.maskTextFn},
  // recordCanvas: ${options.recordCanvas},
  // inlineImages: ${options.inlineImages},
  plugins: [getRecordConsolePlugin()],
});
