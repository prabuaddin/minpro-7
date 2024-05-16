import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  pointsBalance: '',
  points: '',
  discountVoucher: '',
  roleId: '',
  refcode: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.pointsBalance = action.payload.pointsBalance;
      state.points = action.payload.points;
      state.discountVoucher = action.payload.discountVoucher;
      state.roleId = action.payload.roleId;
      state.refcode = action.payload.refcode;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
