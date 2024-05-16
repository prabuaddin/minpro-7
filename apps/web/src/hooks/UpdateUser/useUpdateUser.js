import { useUpdateUserMutation } from '../../api/updateUser/useUpdateUserMutation';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setUser } from '@/redux/slice/userSlice';

export const useUpdateUser = () => {
  const dispatch = useDispatch();
  const { mutate: mutationUpdateUser } = useUpdateUserMutation({
    onSuccess: (res) => {
      toast.success(res.data.message);
      dispatch(
        setUser({
          username: res.data.data.user.username,
          email: res.data.data.user.email,
          pointsBalance: res.data.data.user.pointsBalance,
          points: res.data.data.user.points,
          discountVoucher: res.data.data.user.discontVoucher,
          roleId: res.data.data.user.roleId,
          refcode: res.data.data.user.referralNum,
        }),
      );
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    mutationUpdateUser,
  };
};
