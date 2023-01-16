import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { NavbarWrapper, TopMenu } from './style';
import discoverTitles from '@/assets/data/discover_titles.json';

interface IProps {
  children?: ReactNode;
}

const NavBar: FC<IProps> = () => {
  return (
    <NavbarWrapper>
      <div className="wrap-v1">
        <TopMenu>
          {discoverTitles.map((item) => {
            return (
              <div key={item.title} className="item">
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
    </NavbarWrapper>
  );
};

export default memo(NavBar);
