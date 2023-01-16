import React, { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import type { FC, ReactNode } from 'react';

import Navbar from './components/Navbar';

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
