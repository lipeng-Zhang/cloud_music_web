import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import counterReducer from '@/store/modules/counter';
import recommendReducer from '@/pages/Discover/Recommend/store/recommend';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
});

type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
