import { api } from 'shared/libs/axios.ts';
import { handleErrors } from 'shared/libs/handleErrors.ts';
import type { Repository } from './repositoryTypes.ts';
import { ITEMS_PER_PAGE } from 'shared/config/constants.ts';

export const fetchRepositoriesByUser = async (
  username: string,
  page: number,
): Promise<Repository[]> => {
  try {
    const response = await api.get<Repository[]>(`/users/${username}/repos`, {
      params: { page, per_page: ITEMS_PER_PAGE },
    });
    return response.data;
  } catch (error) {
    const handledError = handleErrors(error);
    if (handledError === null) {
      return [];
    }
    throw new Error(handledError);
  }
};
