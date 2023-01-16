import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

import TopBanner from './c-cpns/Topbanner';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  return (
    <div>
      <TopBanner />
    </div>
  );
};

export default memo(Recommend);
