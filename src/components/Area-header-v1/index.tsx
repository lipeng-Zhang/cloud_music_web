import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { AreaHeaderV1Wraper } from './style';
import { Link } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const {
    title = 'default title',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  } = props;

  return (
    <AreaHeaderV1Wraper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <span key={item} className="item">
                {item}
                <span className="divider">|</span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink}>{moreText}</Link>
        <i className="icon sprite_02"></i>
      </div>
    </AreaHeaderV1Wraper>
  );
};

export default memo(AreaHeaderV1);
