import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useRegisterParticipantsUserMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ email, username, password, inputRef }) => {
      return await axios.post('http://localhost:8000/participants/register', {
        email,
        username,
        password,
        inputRef,
      });
    },
    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
