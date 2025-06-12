import axios from 'axios';

export const handleErrors = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.status === 404) {
      return null;
    } else {
      return error.response?.data?.message || error.message || 'Unknown Axios error occurred';
    }
  } else {
    return 'Unknown error';
  }
};
