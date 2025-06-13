import { create } from 'zustand';
import { fetchUserByUsername, type User } from 'entities/user';

type Status = 'idle' | 'loading' | 'success' | 'not-found' | 'error';

interface SearchUserState {
  user: User | null;
  status: Status;
  error: string | null;

  searchUser: (username: string) => Promise<void>;
}

export const useSearchUserStore = create<SearchUserState>((set) => ({
  user: null,
  status: 'idle',
  error: null,

  searchUser: async (username: string) => {
    set({ user: null, status: 'loading', error: null });

    try {
      const result = await fetchUserByUsername(username);
      if (result) {
        set({ user: result, status: 'success' });
      } else {
        set({ status: 'not-found' });
      }
    } catch (e: unknown) {
      set({
        status: 'error',
        error: (e as Error).message || 'An unexpected error occurred',
      });
    }
  },
}));
