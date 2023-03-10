import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { getImageSize } from '@/utils/format';
import { NewAblumItemWrapper } from './style';

interface IProps {
  children?: ReactNode;
  albumData: any;
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { name, picUrl, artist } = props.albumData;
  return (
    <NewAblumItemWrapper>
      <div className="top">
        <img src={getImageSize(picUrl, 100, 100)} alt="" />
        <a className="cover sprite_covor"></a>
      </div>
      <div className="bottom">
        <div className="name">{name}</div>
        <div className="artist">{artist.name}</div>
      </div>
    </NewAblumItemWrapper>
  );
};

export default memo(NewAlbumItem);
