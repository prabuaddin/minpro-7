import {
  useLoginEoUserMutation,
  useLoginParticipantsUserMutation,
} from '../../api/LoginUser/useLoginUserMutation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { setCookie } from '../../lib/cookiesHelper';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slice/userSlice';

export const useLoginEoUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutate: mutationLoginEoUser } = useLoginEoUserMutation({
    onSuccess: (res) => {
      setCookie(res.data.data.accessToken, res.data.data.user.username);
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
  const dispatch = useDispatch();

  const { mutate: mutationLoginParticipantsUser } =
    useLoginParticipantsUserMutation({
      onSuccess: (res) => {
        setCookie(res.data.data.accessToken);
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
