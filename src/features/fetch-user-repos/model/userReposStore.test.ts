import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useUserReposStore } from './userReposStore.ts';
import * as repoModule from 'entities/repository';

describe('useUserReposStore', () => {
  beforeEach(() => {
    useUserReposStore.setState({
      repos: [],
      error: null,
      currentPage: 1,
      hasMore: true,
    });

    vi.clearAllMocks();
  });

  it('should set hasMore=false, if repo list is empty', async () => {
    vi.spyOn(repoModule, 'fetchRepositoriesByUser').mockResolvedValueOnce([]);

    await useUserReposStore.getState().fetchRepos('octocat', 3);

    const state = useUserReposStore.getState();
    expect(state.repos).toEqual([]);
    expect(state.hasMore).toBe(false);
  });

  it('should handle fetch error', async () => {
    vi.spyOn(repoModule, 'fetchRepositoriesByUser').mockRejectedValueOnce(
      new Error('Network error'),
    );

    await useUserReposStore.getState().fetchRepos('octocat', 1);

    const state = useUserReposStore.getState();
    expect(state.error).toBe('Network error');
  });
});
