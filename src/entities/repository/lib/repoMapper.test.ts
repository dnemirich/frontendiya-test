import { describe, it, expect } from 'vitest';
import { mapRepo } from './repoMapper.ts';
import type { RepositorySummary } from '../model';

describe('mapRepo', () => {
  it('transforms Repository to RepositorySummary correctly', () => {
    const repo = {
      id: 123,
      name: 'dnemirich',
      description: 'My repo description',
      html_url: 'https://github.com/user/dnemirich',
    } as unknown as RepositorySummary;

    const result = mapRepo(repo as unknown as any);

    expect(result).toEqual({
      id: 123,
      name: 'dnemirich',
      description: 'My repo description',
      html_url: 'https://github.com/user/dnemirich',
    });
  });

  it('works fine with empty description', () => {
    const repo = {
      id: 1,
      name: 'empty-desc',
      description: '',
      html_url: 'https://github.com/user/empty-desc',
    } as unknown as RepositorySummary;

    const result = mapRepo(repo as unknown as any);

    expect(result).toEqual({
      id: 1,
      name: 'empty-desc',
      description: '',
      html_url: 'https://github.com/user/empty-desc',
    });
  });
});
