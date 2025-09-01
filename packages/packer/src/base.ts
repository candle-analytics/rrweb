import type { eventWithTime } from '@candle-analytics/rrweb-types';

export type eventWithTimeAndPacker = eventWithTime & {
  v: string;
};

export const MARK = 'v1';
