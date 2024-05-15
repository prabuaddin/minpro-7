import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from '../redux/slice/userSlice';

const rootReducer = combineReducers({
  user: userSlice,
});

const persistConfig = {
  key: 'main-root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

export const store = configureStore({
  reducer: persistedReducer,
});
