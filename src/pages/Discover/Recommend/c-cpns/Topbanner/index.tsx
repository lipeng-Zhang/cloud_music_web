import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { Carousel } from 'antd';
import { shallowEqual } from 'react-redux';

import { fetchBanner } from '../../store/recommend';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  TopBannerWrapper,
  TopBannerLeft,
  TopBannerRight,
  TopBannerCenter,
  TopBannerButton
} from './style';

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBanner());
  }, []);

  const { banners } = useAppSelector((state) => state.recommend, shallowEqual);
  console.log(banners);

  return (
    <TopBannerWrapper>
      <TopBannerCenter>
        <TopBannerButton
          style={{ left: '-68px', backgroundPosition: '0 -360px' }}
        ></TopBannerButton>
        <TopBannerButton
          style={{ right: '-68px', backgroundPosition: '0 -508px' }}
        ></TopBannerButton>
        <TopBannerLeft>
          <Carousel autoplay>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img src={item.imageUrl} className="image"></img>
                </div>
              );
            })}
          </Carousel>
        </TopBannerLeft>
        <div>
          <TopBannerRight></TopBannerRight>
        </div>
      </TopBannerCenter>
    </TopBannerWrapper>
  );
};

export default memo(TopBanner);
