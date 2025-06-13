import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchRepositoriesByUser } from './repositoryApi.ts';
import { api } from 'shared/libs/axios.ts';
import { handleErrors } from 'shared/libs/handleErrors.ts';
import type { Repository } from './repositoryTypes.ts';

vi.mock('shared/libs/axios.ts', () => ({
  api: {
    get: vi.fn(),
  },
}));

vi.mock('shared/libs/handleErrors.ts', () => ({
  handleErrors: vi.fn(),
}));

const mockedApi = api.get as unknown as ReturnType<typeof vi.fn>;
const mockedHandleErrors = handleErrors as unknown as ReturnType<typeof vi.fn>;

describe('fetchRepositoriesByUser', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns repositories in case of success response', async () => {
    const mockData: Repository[] = [
      { id: 1, name: 'repo1', html_url: '', description: '' } as Repository,
    ];

    mockedApi.mockResolvedValueOnce({ data: mockData });

    const result = await fetchRepositoriesByUser('dnemirich', 1);
    expect(api.get).toHaveBeenCalledWith('/users/dnemirich/repos', {
      params: { page: 1, per_page: expect.any(Number) },
    });
    expect(result).toEqual(mockData);
  });

  it('returns [] if handleErrors returns null', async () => {
    mockedApi.mockRejectedValueOnce(new Error('Request failed'));
    mockedHandleErrors.mockReturnValueOnce(null);

    const result = await fetchRepositoriesByUser('dnemirich', 2);
    expect(result).toEqual([]);
  });

  it('throw an Error if handleErrors returns message', async () => {
    mockedApi.mockRejectedValueOnce(new Error('Internal error'));
    mockedHandleErrors.mockReturnValueOnce('Something went wrong');

    await expect(fetchRepositoriesByUser('dnemirich', 3)).rejects.toThrow('Something went wrong');
  });
});
