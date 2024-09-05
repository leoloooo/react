import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { AnchorWrapper } from '@/views/discover/cpns/hot-anchor/style';
import AreaHeaderRight from '@/components/area-header-right';

interface IProps {
  children?: ReactNode;
}

const HotAnchor: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <AreaHeaderRight title="热门主播" />
    </AnchorWrapper>
  );
};

export default memo(HotAnchor);
