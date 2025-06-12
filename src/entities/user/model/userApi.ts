import type { User } from './userTypes.ts';
import { api } from 'shared/libs/axios.ts';
import { handleErrors } from 'shared/libs/handleErrors.ts';

export const fetchUserByUsername = async (username: string): Promise<User | null> => {
  if (!username.trim()) {
    throw new Error('Username must not be empty');
  }

  try {
    const response = await api.get<User>(`/users/${username}`);
    return response.data;
  } catch (error) {
    const handledError = handleErrors(error);
    if (handledError === null) {
      return null;
    }

    throw new Error(handledError);
  }
};
