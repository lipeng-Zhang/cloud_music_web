import React, { memo, useRef, useState } from 'react';
import type { FC, ReactNode, ElementRef } from 'react';
import { Carousel } from 'antd';
import { shallowEqual } from 'react-redux';

import { useAppSelector } from '@/store';
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
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  function handlePrevClick() {
    bannerRef.current?.prev();
  }

  function handleNextClick() {
    bannerRef.current?.next();
  }

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const { banners } = useAppSelector((state) => state.recommend, shallowEqual);

  let imageUrl = banners[currentBannerIndex]?.imageUrl;
  if (imageUrl) {
    imageUrl = imageUrl + '?imageView&blur=40x20';
  }

  const beforeChangeHandler = (from: number, to: number) => {
    setTimeout(() => {
      setCurrentBannerIndex(to);
    }, 50);
  };

  return (
    <TopBannerWrapper
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '6000px',
        backgroundPosition: 'center center'
      }}
    >
      <TopBannerCenter>
        <TopBannerButton
          onClick={handlePrevClick}
          style={{ left: '-68px', backgroundPosition: '0 -360px' }}
        ></TopBannerButton>
        <TopBannerButton
          onClick={handleNextClick}
          style={{ right: '-68px', backgroundPosition: '0 -508px' }}
        ></TopBannerButton>
        <TopBannerLeft>
          <Carousel
            autoplay
            ref={bannerRef}
            effect="fade"
            beforeChange={beforeChangeHandler}
          >
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
