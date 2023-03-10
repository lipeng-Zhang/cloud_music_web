import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { shallowEqual } from 'react-redux';

import { useAppSelector } from '@/store';
import SongItem from '@/components/Song-item';
import { HotRecommendWrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector((state) => state.recommend, shallowEqual);
  return (
    <HotRecommendWrapper>
      {hotRecommend.map((item) => {
        return <SongItem key={item.id} itemData={item} />;
      })}
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);
