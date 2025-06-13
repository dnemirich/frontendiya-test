import { describe, expect, it } from 'vitest';
import { formatNumber } from './numberFormatter.ts';

describe('formatNumber', () => {
  it('returns plain number for values < 1000', () => {
    expect(formatNumber(0)).toBe('0');
    expect(formatNumber(999)).toBe('999');
  });

  it('formats thousands correctly', () => {
    expect(formatNumber(1000)).toBe('1K');
    expect(formatNumber(1500)).toBe('1.5K');
    expect(formatNumber(19999)).toBe('20K');
  });

  it('formats millions correctly', () => {
    expect(formatNumber(1_000_000)).toBe('1M');
    expect(formatNumber(1_500_000)).toBe('1.5M');
    expect(formatNumber(9_900_000)).toBe('9.9M');
  });

  it('removes .0 for clean numbers', () => {
    expect(formatNumber(1000)).toBe('1K');
    expect(formatNumber(1_000_000)).toBe('1M');
    expect(formatNumber(2_000_000)).toBe('2M');
  });
});
