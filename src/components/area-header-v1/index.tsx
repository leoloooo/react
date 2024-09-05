import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { HeaderWrapper } from '@/components/area-header-v1/style';
import { Link } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}

const AreaHeader: FC<IProps> = (props) => {
  const { title = '默认标题', keywords = [], moreText = '更多', moreLink = '/' } = props;
  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="text">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink} className="more">
          {moreText}
        </Link>
        <i className="icon"></i>
      </div>
    </HeaderWrapper>
  );
};

export default memo(AreaHeader);
