import React, { memo, useRef } from 'react';
import type { FC, ReactNode, ElementRef } from 'react';
import { Carousel } from 'antd';
import { useAppSelector } from '@/store';

import AreaHeaderV1 from '@/components/Area-header-v1';
import NewAlbumItem from '@/components/New-album-item';
import { NewAlbumWrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  const newAlbum = useAppSelector((state) => state.recommend.newAlbum);

  const handlePrevClick = () => {
    bannerRef.current?.prev();
  };

  const handleNextClick = () => {
    bannerRef.current?.next();
  };

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></div>
        <div className="sprite_02 arrow arrow-right" onClick={handleNextClick}></div>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="newalbum_list">
                    {newAlbum.slice(item * 5, item * 5 + 5).map((album) => {
                      return <NewAlbumItem key={album.id} albumData={album} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  );
};

export default memo(NewAlbum);
