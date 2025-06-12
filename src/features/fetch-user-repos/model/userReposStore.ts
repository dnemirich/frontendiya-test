import { create } from 'zustand';
import { fetchRepositoriesByUser, type Repository } from 'entities/repository';

type UserReposState = {
  repos: Repository[];
  error: string | null;
  currentPage: number;
  hasMore: boolean;
  fetchRepos: (username: string, page: number) => Promise<void>;
};

export const useUserReposStore = create<UserReposState>((set) => ({
  repos: [],
  error: null,
  currentPage: 1,
  hasMore: true,

  fetchRepos: async (username, page = 1) => {
    try {
      const repos = await fetchRepositoriesByUser(username, page);

      if (repos.length === 0) {
        set({ hasMore: false });
        return;
      }

      set({
        repos,
        currentPage: page,
        hasMore: repos.length > 0,
        error: null,
      });
    } catch (e) {
      set({ error: (e as Error).message });
    }
  },
}));
