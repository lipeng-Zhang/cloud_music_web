import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';

import TopBanner from './c-cpns/Topbanner';
import AreaHeaderV1 from '@/components/Area-header-v1';
import { RecommendWrap } from './style';
import { useAppDispatch } from '@/store';
import { fetchBanner, fetchHotRecommend, fetchNewAlbum } from './store/recommend';
import HotRecommend from './c-cpns/HotRecommend';
import NewAlbum from './c-cpns/NewAlbum';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBanner());
    dispatch(fetchHotRecommend());
    dispatch(fetchNewAlbum());
  }, []);

  return (
    <RecommendWrap>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <AreaHeaderV1
            title={'热门推荐'}
            keywords={['华语', '流行', '摇滚', '民谣', '电子']}
            moreLink={'/discover/song'}
          />
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrap>
  );
};

export default memo(Recommend);
