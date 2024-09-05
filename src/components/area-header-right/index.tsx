import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { HeaderRightWrapper } from '@/components/area-header-right/style';

interface IProps {
  children?: ReactNode;
  title: string;
  more?: string;
}

const HeaderRight: FC<IProps> = ({ title, more }) => {
  return (
    <HeaderRightWrapper>
      <h3 className="title">{title}</h3>
      <a href="#/discover/artist" className="more">
        {more}
      </a>
    </HeaderRightWrapper>
  );
};

export default memo(HeaderRight);
