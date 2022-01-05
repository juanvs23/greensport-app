import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  ColorThemeSlice  from '../features/colorTheme/colorSlice';
import counterReducer from '../features/counter/counterSlice';
import  loginSlice  from '../features/login/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginSlice,
    colorTheme:ColorThemeSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
