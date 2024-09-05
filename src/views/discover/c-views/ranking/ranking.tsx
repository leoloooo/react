import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const ranking: FC<IProps> = () => {
  return <div>template</div>;
};

export default memo(ranking);
