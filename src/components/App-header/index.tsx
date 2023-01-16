import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import headerTitles from '@/assets/data/header_titles.json';

interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  const showItem = (item: any) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined;
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01"></a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.link}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className="search">
            <Input
              style={{ borderRadius: '16px' }}
              placeholder="唱跳rap篮球"
              prefix={<SearchOutlined />}
            />
          </span>
          <span className="center">创作者中心</span>
          <span>登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
