import {
  useLoginEoUserMutation,
  useLoginParticipantsUserMutation,
} from '../../api/LoginUser/useLoginUserMutation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useLoginEoUser = () => {
  const router = useRouter();

  const { mutate: mutationLoginEoUser } = useLoginEoUserMutation({
    onSuccess: (res) => {
      toast.success(res.data.message);
      router.push('/');
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    mutationLoginEoUser,
  };
};

export const useLoginParticipantsUser = () => {
  const router = useRouter();

  const { mutate: mutationLoginParticipantsUser } =
    useLoginParticipantsUserMutation({
      onSuccess: (res) => {
        toast.success(res.data.message);
        router.push('/');
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    });

  return {
    mutationLoginParticipantsUser,
  };
};
