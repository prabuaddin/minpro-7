import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useLoginEoUserMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ email, password }) => {
      return await axios.post(
        'http://localhost:8000/auth/event-organizer/login',
        {
          email,
          password,
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

export const useLoginParticipantsUserMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ email, password }) => {
      return await axios.post('http://localhost:8000/auth/participants/login', {
        email,
        password,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
