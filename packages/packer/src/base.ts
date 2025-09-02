import type { eventWithTime } from '@getcandle/rrweb-types';

export type eventWithTimeAndPacker = eventWithTime & {
  v: string;
};

export const MARK = 'v1';
