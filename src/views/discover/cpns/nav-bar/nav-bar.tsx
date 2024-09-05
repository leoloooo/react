import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { NavWrapper } from '@/views/discover/cpns/nav-bar/style';
import discoverData from '@/assess/data/discover-data.json';
import { NavLink } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
}

const Navbar: FC<IProps> = () => {
  return (
    <NavWrapper className="wrapv1">
      <div className="nav">
        {discoverData.map((item) => {
          return (
            <div key={item.title} className="item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </NavWrapper>
  );
};

export default memo(Navbar);
