import { useRegisterUserEoMutation } from '../../api/RegisterUser/useRegisterUserEoMutation';
import { toast } from 'react-toastify';

export const useRegisterEoUser = () => {
  const { mutate: mutationRegisterEoUser } = useRegisterUserEoMutation({
    onSuccess: (res) => {
      toast.success(res.data.message);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    mutationRegisterEoUser,
  };
};
