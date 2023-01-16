import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { resolve } from 'path';
import { increment } from '@/store/modules/counter';

// 首先, 创建 thunk
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    console.log('hi');
    const response = await axios.request({
      url: 'https://api.github.com/search/users?q=aa'
    });
    console.dir(response);
    return response;
  }
);
console.dir(fetchUserById);
console.dir(increment);
fetchUserById();
interface IProps {
  children?: ReactNode;
}

const Demo: FC<IProps> = () => {
  return <div>Demo</div>;
};

export default memo(Demo);
