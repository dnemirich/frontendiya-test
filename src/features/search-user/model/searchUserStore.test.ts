import { useSearchUserStore } from './searchUserStore';
import { act } from 'react-dom/test-utils';
import { vi } from 'vitest';
import { fetchUserByUsername } from 'entities/user';

vi.mock('entities/user', () => ({
  fetchUserByUsername: vi.fn(),
}));

describe('searchUserStore', () => {
  it('should have initial state', () => {
    const { user, status, error } = useSearchUserStore.getState();

    expect(user).toBeNull();
    expect(status).toBe('idle');
    expect(error).toBeNull();
  });

  it('should update state on successful user fetch', async () => {
    const mockUser = {
      login: 'dnemirich',
      id: 123,
      node_id: '',
      avatar_url: 'https://avatar.com/avatar.jpg',
      gravatar_id: '',
      url: '',
      html_url: 'https://github.com/dnemirich',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: false,
      name: '',
      company: '',
      blog: '',
      location: '',
      email: '',
      hireable: false,
      bio: 'Darya Nemirich',
      twitter_username: '',
      public_repos: 0,
      public_gists: 0,
      followers: 1,
      following: 5,
      created_at: '',
      updated_at: '',
    };
    vi.mocked(fetchUserByUsername).mockResolvedValueOnce(mockUser);

    const { searchUser } = useSearchUserStore.getState();

    await act(async () => {
      await searchUser('testUser');
    });

    expect(useSearchUserStore.getState().user).toEqual(mockUser);
    expect(useSearchUserStore.getState().status).toBe('success');
  });

  it('should handle errors correctly', async () => {
    const mockError = new Error('Error fetching user');
    vi.mocked(fetchUserByUsername).mockRejectedValueOnce(mockError);

    const { searchUser } = useSearchUserStore.getState();

    await act(async () => {
      await searchUser('testUser');
    });

    expect(useSearchUserStore.getState().status).toBe('error');
    expect(useSearchUserStore.getState().error).toBe(mockError.message);
  });
});
