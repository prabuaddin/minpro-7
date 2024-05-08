import { useRegisterParticipantsUserMutation } from '../../api/RegisterUser/useRegisterUserParticipantsMutation';
import { toast } from 'react-toastify';

export const useRegisterParticipantsUser = () => {
  const { mutate: mutationRegisterParticipantsUser } =
    useRegisterParticipantsUserMutation({
      onSuccess: (res) => {
        toast.success(res.data.message);
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    });

  return {
    mutationRegisterParticipantsUser,
  };
};
