import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello redux'
  },
  reducers: {
    increment: (state, { payload }: PayloadAction<number>) => {
      state.count += payload;
    }
  }
});

export const { increment } = countSlice.actions;
export default countSlice.reducer;
