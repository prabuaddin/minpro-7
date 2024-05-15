import { useRegisterParticipantsUserMutation } from '../../api/RegisterUser/useRegisterUserParticipantsMutation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useRegisterParticipantsUser = () => {
  const router = useRouter();

  const { mutate: mutationRegisterParticipantsUser } =
    useRegisterParticipantsUserMutation({
      onSuccess: (res) => {
        toast.success(res.data.message);
        router.push('/participants/login');
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    });

  return {
    mutationRegisterParticipantsUser,
  };
};
