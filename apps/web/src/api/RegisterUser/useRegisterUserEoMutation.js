import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useRegisterUserEoMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ email, password, username }) => {
      return await axios.post(
        'http://localhost:8000/event-organizer/register',
        {
          email,
          password,
          username,
        },
      );
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
