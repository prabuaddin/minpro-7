import { useRegisterUserEoMutation } from '../../api/RegisterUser/useRegisterUserEoMutation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useRegisterEoUser = () => {
  const router = useRouter();

  const { mutate: mutationRegisterEoUser } = useRegisterUserEoMutation({
    onSuccess: (res) => {
      toast.success(res.data.message);
      router.push('/event-organizer/login');
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    mutationRegisterEoUser,
  };
};
