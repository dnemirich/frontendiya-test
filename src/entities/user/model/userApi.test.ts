import { describe, it, expect, vi, type Mock } from 'vitest';
import { fetchUserByUsername } from './userApi.ts';
import { api } from 'shared/libs/axios';
import { handleErrors } from 'shared/libs/handleErrors';

vi.mock('shared/libs/axios', () => ({
  api: {
    get: vi.fn(),
  },
}));

vi.mock('shared/libs/handleErrors', () => ({
  handleErrors: vi.fn(),
}));

describe('fetchUserByUsername', () => {
  const mockedApiGet = api.get as unknown as Mock;
  const mockedHandleErrors = handleErrors as unknown as Mock;

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('throws error if username is empty', async () => {
    await expect(fetchUserByUsername('')).rejects.toThrow('Username must not be empty');
    await expect(fetchUserByUsername('    ')).rejects.toThrow('Username must not be empty');
  });

  it('returns user data when request is successful', async () => {
    const mockUser = { login: 'dnemirich', id: 1 };
    mockedApiGet.mockResolvedValueOnce({ data: mockUser });

    const user = await fetchUserByUsername('dnemirich');
    expect(user).toEqual(mockUser);
    expect(mockedApiGet).toHaveBeenCalledWith('/users/dnemirich');
  });

  it('returns null when handleErrors returns null on error', async () => {
    mockedApiGet.mockRejectedValueOnce(new Error('Not found'));
    mockedHandleErrors.mockReturnValueOnce(null);

    const user = await fetchUserByUsername('unknown');
    expect(user).toBeNull();
  });

  it('throws error when handleErrors returns error message', async () => {
    mockedApiGet.mockRejectedValueOnce(new Error('Server error'));
    mockedHandleErrors.mockReturnValueOnce('Server error');

    await expect(fetchUserByUsername('erroruser')).rejects.toThrow('Server error');
  });
});
