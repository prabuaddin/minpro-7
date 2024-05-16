import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { axiosInstance } from '../../lib/axiosinstance';

export const useUpdateUserMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ email, username }) => {
      return await axiosInstance.put('/auth/profile', {
        email,
        username,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
