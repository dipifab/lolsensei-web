import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  ALLOWED_REGIONS,
  REGION_DISPLAY,
  isAllowedRegion,
} from '../../../src/lib/regions';

const __dirname = dirname(fileURLToPath(import.meta.url));
const snapshotPath = join(__dirname, '..', '..', 'fixtures', 'regions-snapshot.json');

interface SnapshotEntry {
  platform: string;
  display: string;
}

interface Snapshot {
  regions: SnapshotEntry[];
}

const snapshot: Snapshot = JSON.parse(readFileSync(snapshotPath, 'utf-8'));

describe('regions parity FE <-> BE snapshot', () => {
  it('FE ALLOWED_REGIONS matches BE snapshot platform set (size + content)', () => {
    const sortedFe = [...ALLOWED_REGIONS].sort();
    const sortedBe = snapshot.regions.map((r) => r.platform).sort();
    expect(sortedFe).toEqual(sortedBe);
  });

  it('FE REGION_DISPLAY matches BE snapshot display labels', () => {
    for (const entry of snapshot.regions) {
      const region = entry.platform as (typeof ALLOWED_REGIONS)[number];
      expect(REGION_DISPLAY[region]).toBe(entry.display);
    }
  });

  it('isAllowedRegion type guard accepts all snapshot regions', () => {
    for (const entry of snapshot.regions) {
      expect(isAllowedRegion(entry.platform)).toBe(true);
    }
  });

  it('isAllowedRegion type guard rejects unknown values', () => {
    expect(isAllowedRegion('xx')).toBe(false);
    expect(isAllowedRegion('EUW1')).toBe(false); // case-sensitive
    expect(isAllowedRegion('')).toBe(false);
  });
});
