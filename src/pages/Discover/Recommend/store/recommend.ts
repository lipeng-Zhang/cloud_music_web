import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend';

export const fetchBanner = createAsyncThunk('recommend/banner', async () => {
  const res = await getBanners();
  return res.data;
});

export const fetchHotRecommend = createAsyncThunk(
  'recommend/hotRecommend',
  async () => {
    const res = await getHotRecommend(8);
    return res.data.result;
  }
);

export const fetchNewAlbum = createAsyncThunk('recommend/newAlboum', async () => {
  const res = await getNewAlbum();
  return res.data.albums;
});

interface IRecommendState {
  banners: any[];
  hotRecommend: any[];
  newAlbum: any[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: []
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
      })
      .addCase(fetchHotRecommend.fulfilled, (state, { payload }) => {
        state.hotRecommend = payload;
      })
      .addCase(fetchNewAlbum.fulfilled, (state, { payload }) => {
        state.newAlbum = payload;
      });
  }
});
export default recommendSlice.reducer;
