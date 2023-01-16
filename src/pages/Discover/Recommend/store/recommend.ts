import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '../service/recommend';

export const fetchBanner = createAsyncThunk('recommend/banner', async () => {
  const res = await getBanners();
  return res.data;
});

interface IRecommendState {
  banners: any[];
}

const initialState: IRecommendState = {
  banners: []
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanner.fulfilled, (state, { payload }) => {
        state.banners = payload.banners;
      })
      .addCase(fetchBanner.rejected, () => {
        console.log('rejected');
      });
  }
});
export default recommendSlice.reducer;
